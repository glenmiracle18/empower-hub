"use client";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoaderCircleIcon } from "../common/Icons";
import PasswordInput from "../common/PasswordInput";
import { StudentCard, UserCardFallback } from "../common/UserCard";
import { Button } from "../ui/button";

interface Props {
  userDetails: null;
  setUserDetails: (userDetails: null) => void;
}

const RegisterForm = ({ userDetails, setUserDetails }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingCard, setIsLoadingCard] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userDetails ? loginWithCredentials() : getStudent();
  };

  const loginWithCredentials = async () => {
    console.log("loginWithCredentials");
  };

  const getStudent = async () => {
    setIsLoading(true);
    setIsLoadingCard(true);
    try {
      const result = await axios.get("/api/student/", {
        headers: {
          identifier: formData.identifier,
        },
      });
      toast({
        title: "Estudiante encontrado",
        description: "Se encontró el estudiante " + result.data.name,
        variant: "default",
      });

      setUserDetails(result.data);
    } catch (error) {
      toast({
        title: "Algo salió mal",
        description: "El estudiante no fue encontrado",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setIsLoadingCard(false);
    }
  };

  return (
    <form className="mt-6" method="POST" onSubmit={handleSubmit}>
      {!isLoading && !userDetails && (
        <>
          <input
            type="text"
            name="identifier"
            id="input-identifier"
            value={formData.identifier}
            onChange={handleChange}
            placeholder="Ingrese su correo institucional o código de estudiante"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoFocus
            autoComplete="on"
            required
          />
        </>
      )}
      {isLoadingCard && <UserCardFallback />}
      {userDetails && (
        <>
          <StudentCard user={userDetails} setUser={setUserDetails} />
          <PasswordInput value={formData.password} onChange={handleChange} />
        </>
      )}
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-base mt-6"
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderCircleIcon />
        ) : (
          <>{userDetails ? "Confirmar" : "Continuar"}</>
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
