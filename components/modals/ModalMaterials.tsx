import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import { CREATE_MATERIAL } from "@/graphql/client/materials";
import { toast } from "react-toastify";

interface ModalMaterialsProps {
  openModalMaterials: boolean;
  setOpenModalMaterials: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  name: string;
  price: number;
}

const initialFormData: FormData = {
  name: "",
  price: 0,
};

const ModalMaterials = ({
  openModalMaterials,
  setOpenModalMaterials,
}: ModalMaterialsProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [createMaterial, { loading }] = useMutation(CREATE_MATERIAL);

  const handleSubmit = async () => {
    const { name, price } = formData;
    try {
      const { data } = await createMaterial({
        variables: {
          name,
          price: Number(price),
        },
      });
      const { createMaterial: material } = data;
      toast.success(`${material.name} creado con éxito`);

      setFormData(initialFormData);
      setOpenModalMaterials(false);
    } catch (error) {
      toast.error("Error al crear el material");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Modal
      open={openModalMaterials}
      setOpen={setOpenModalMaterials}
      modalTitle="Agregar un material"
    >
      <>
        <div className="flex flex-col gap-5 w-600">
          <form action="">
            <label htmlFor="name">
              <span className="text-gray-700 tracking-[0.3em]">Nombre:</span>
              <input
                className="text-gray-700 tracking-[0.3em]"
                type="text"
                name="name"
                id="name"
                placeholder="Madera"
                onChange={handleChange}
                value={formData.name}
              />
            </label>
            <label htmlFor="price">
              <span className="text-gray-700 tracking-[0.3em]">Saldo:</span>
              <input
                className="text-gray-700 tracking-[0.3em]"
                type="number"
                min={0}
                step={1}
                name="price"
                id="price"
                placeholder="300"
                onChange={handleChange}
                value={formData.price}
              />
            </label>
          </form>
          <div className="flex justify-between">
            <button
              className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
              onClick={() => setOpenModalMaterials(false)}
              disabled={loading}
            >
              Salir
            </button>
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="bg-slate-800 text-white border-slate-800 uppercase tracking-[0.3em] rounded-lg hover:bg-white hover:border-slate-800 hover:text-slate-800"
            >
              Enviar
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ModalMaterials;
