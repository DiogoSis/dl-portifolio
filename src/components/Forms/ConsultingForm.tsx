import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import styles from "./Form.module.css";

interface ConsultingFormProps {
  onBack: () => void;
}

const ConsultingForm: React.FC<ConsultingFormProps> = ({ onBack }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    employees: "",
    phone: "",
    email: "",
    observations: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    company: false,
    employees: false,
    phone: false,
    email: false,
  });

  const employeeOptions = [
    { value: "<10", label: "< 10" },
    { value: "10 a 49", label: "10 a 49" },
    { value: "50 a 99", label: "50 a 99" },
    { value: "> 100", label: "> 100" },
    { value: "> 500", label: "> 500" },
  ];

  const handleChange = (
    e:
      | SelectChangeEvent<string>
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Verifica se o evento é do tipo SelectChangeEvent
    if ("value" in e.target) {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formValues.name.trim(),
      company: !formValues.company.trim(),
      employees: !formValues.employees.trim(),
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    alert("Formulário enviado com sucesso!");
    setFormValues({
      name: "",
      company: "",
      employees: "",
      phone: "",
      email: "",
      observations: "",
    });
  };

  return (
    <Box>
      <Typography
        className={styles.titleForm}
        variant="h3"
        fontFamily="sf pixelate"
      >
        Consultoria para sua Empresa
      </Typography>
      <TextField
        className={styles.customTextField}
        label="Nome"
        name="name"
        placeholder="Digite seu Nome"
        fullWidth
        value={formValues.name}
        onChange={handleChange}
        required
        error={errors.name}
        helperText={errors.name ? "Este campo é obrigatório" : ""}
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
        placeholder="Digite o Nome da Empresa"
        name="company"
        fullWidth
        value={formValues.company}
        onChange={handleChange}
        required
        error={errors.company}
        helperText={errors.company ? "Este campo é obrigatório" : ""}
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "#00ff00" },
        }}
        sx={{ mb: 2 }}
      />
      <FormControl className={styles.customTextField} fullWidth sx={{ mb: 2 }}>
        <InputLabel id="employees-label" style={{ color: "#00ff00" }}>
          Quantidade de Funcionários
        </InputLabel>
        <Select
          labelId="employees-label"
          name="employees"
          value={formValues.employees}
          onChange={handleChange}
          error={errors.employees}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          {employeeOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              style={{ color: "black", fontWeight: "Bolder" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={styles.customTextField}
        label="Telefone"
        name="phone"
        fullWidth
        value={formValues.phone}
        onChange={handleChange}
        required
        error={errors.phone}
        helperText={errors.phone ? "Este campo é obrigatório" : ""}
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
        label="Observações"
        name="observations"
        fullWidth
        multiline
        rows={4}
        value={formValues.observations}
        onChange={handleChange}
        placeholder="Observações (opcional)"
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
          sx={{ ml: 2 }}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={
            !formValues.name.trim() ||
            !formValues.company.trim() ||
            !formValues.employees.trim() ||
            !formValues.phone.trim() ||
            !formValues.email.trim()
          }
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default ConsultingForm;
