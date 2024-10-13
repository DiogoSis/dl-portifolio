import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import styles from "./Form.module.css";

interface JobOfferFormProps {
  onBack: () => void;
}

const JobOfferForm: React.FC<JobOfferFormProps> = ({ onBack }) => {
  const [formValues, setFormValues] = useState({
    recruter: "",
    company: "",
    phone: "",
    email: "",
    details: "",
  });
  const [errors, setErrors] = useState({
    recruter: false,
    company: false,
    phone: false,
    email: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      recruter: !formValues.recruter.trim(),
      company: !formValues.company.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    alert("Formulário enviado com sucesso!");
    setFormValues({
      recruter: "",
      company: "",
      phone: "",
      email: "",
      details: "",
    });
  };

  return (
    <Box>
      <Typography
        className={styles.titleForm}
        variant="h3"
        fontFamily="sf pixelate"
      >
        Oferta de Trabalho
      </Typography>
      <TextField
        className={styles.customTextField}
        label="Recrutador"
        name="position"
        fullWidth
        value={formValues.recruter}
        onChange={handleChange}
        placeholder="Nome do Recrutador"
        required
        error={errors.recruter}
        helperText={errors.recruter ? "Este campo é obrigatório" : ""}
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        className={styles.customTextField}
        label="Nome da Empresa"
        name="company"
        fullWidth
        value={formValues.company}
        onChange={handleChange}
        required
        error={errors.company}
        helperText={errors.company ? "Este campo é obrigatório" : ""}
        placeholder="Nome da Empresa"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        value={formValues.phone}
        onChange={handleChange}
        className={styles.customTextField}
        inputMode="numeric"
        label="Telefone"
        name="phone"
        fullWidth
        required
        error={errors.phone}
        helperText={errors.phone ? "Este campo é obrigatório" : ""}
        placeholder="Somente Numero"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        className={styles.customTextField}
        label="Email"
        name="email"
        fullWidth
        value={formValues.email}
        onChange={handleChange}
        required
        error={errors.email}
        helperText={errors.email ? "Este campo é obrigatório" : ""}
        placeholder="Seu email"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <TextField
        className={styles.customTextField}
        label="Detalhes da Oferta"
        name="details"
        fullWidth
        multiline
        rows={4}
        value={formValues.details}
        onChange={handleChange}
        placeholder="Descrição da Oferta"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
      />
      <Box mt={2}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={!formValues.details.trim()}
          sx={{ ml: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default JobOfferForm;
