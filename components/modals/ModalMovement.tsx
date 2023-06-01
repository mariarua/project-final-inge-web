import React, { Dispatch, SetStateAction, useState, ChangeEvent } from "react";
import Modal from "./Modal";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_MOVEMENT } from "@/graphql/client/movements";
import { Material } from "@prisma/client";
import { GET_MATERIALS_LIST } from "@/graphql/client/materials";
import { toast } from "react-toastify";
import { log } from "console";
import { useUserContext } from "@/context/UserContext";


interface ModalMovementProps {
  openModalMovement: boolean;
  setOpenModalMovement: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  materialId: string;
  input: number;
  output: number;
  userId: string | undefined;
}

const ModalMovement = ({
  openModalMovement,
  setOpenModalMovement,
}: ModalMovementProps) => {
  const { user } = useUserContext();
  const initialFormData: FormData = {
    materialId: '',
    input: 0,
    output: 0,
    userId: user?.id,
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [createMovement, { loading }] = useMutation(CREATE_MOVEMENT);
  
  const handleSubmit = async () => {
    const { materialId, input, output, userId} = formData;
    try {
      const { data } = await createMovement({
        variables: {
          materialId,
          input: Number(input),
          output: Number(output),
          userId,
        },
      });
      toast.success(`Movimiento creado con éxito`);

      setFormData(initialFormData);
      setOpenModalMovement(false);
    } catch (error) {
      toast.error("Error al crear el movimiento");
    }
  };
  console.log(formData);
  
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { data: materialsData } = useQuery<{
    materials: Material[];
  }>(GET_MATERIALS_LIST, {
    fetchPolicy: "cache-first",
  });

  const handleClose = () => {
    setOpenModalMovement(false);
    setFormData(initialFormData);
  };
  
  return (
    <Modal
      open={openModalMovement}
      setOpen={setOpenModalMovement}
      modalTitle="Agregar un movimiento"
    >
      <div className="flex flex-col gap-5">
        <form>
          <label htmlFor="material">
            <span>Material:</span>
            <select
              name="materialId"
              id="materialId"
              onChange={handleChange}
              placeholder="Seleccionar material"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {materialsData?.materials.map((material) => (
                <option key={`material_${material.id}`} value={material.id}>
                  {material.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="input">

            <span>Input:</span>
            <input
              type="number"
              min={0}
              step={1}
              name="input"
              id="input"
              placeholder="50"
              onChange={handleChange}
              value={formData.input}
            />
          </label>
          <label htmlFor="output">
            <span>Output:</span>
            <input
              type="number"
              min={0}
              step={1}
              name="output"
              id="output"
              placeholder="25"
              onChange={handleChange}
              value={formData.output}
            />
          </label>
        </form>
        <div className="flex justify-between">
          <button onClick={() => handleClose()}>Salir</button>
          <button disabled={loading} onClick={handleSubmit}>

            Enviar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalMovement;
