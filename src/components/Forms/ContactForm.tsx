import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
  Grid,
  CircularProgress,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Message as MessageIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { validateEmail, validatePhone } from '../../utils';
import { CONTACT_WEBHOOK } from '../../constants';
import styles from './ContactForm.module.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação do nome
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validação do telefone (opcional mas se preenchido deve ser válido)
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido. Use o formato: (XX) XXXXX-XXXX';
    }

    // Validação dos detalhes
    if (!formData.details.trim()) {
      newErrors.details = 'Detalhes são obrigatórios';
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Detalhes devem ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (field: keyof ContactFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setFormData(prev => ({ ...prev, [field]: value }));

      // Limpar erro específico quando usuário começar a digitar
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(CONTACT_WEBHOOK.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          timestamp: new Date().toISOString(),
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          details: '',
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');

    // Aplica máscara (XX) XXXXX-XXXX
    if (digits.length <= 11) {
      return digits
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    return value;
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(event.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));

    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  return (
    <Box className={styles.container}>
      <Paper elevation={3} className={styles.formPaper}>
        <Box className={styles.header}>
          <Typography variant="h4" component="h1" className={styles.title}>
            Entre em Contato
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Preencha o formulário abaixo e entrarei em contato o mais breve
            possível.
          </Typography>
        </Box>

        {submitStatus === 'success' && (
          <Alert severity="success" className={styles.alert}>
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert severity="error" className={styles.alert}>
            Erro ao enviar mensagem. Tente novamente ou entre em contato via
            email.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} className={styles.form}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nome completo"
                value={formData.name}
                onChange={handleInputChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  startAdornment: <PersonIcon className={styles.inputIcon} />,
                }}
                required
                className={styles.textField}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: <EmailIcon className={styles.inputIcon} />,
                }}
                required
                className={styles.textField}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telefone (opcional)"
                value={formData.phone}
                onChange={handlePhoneChange}
                error={!!errors.phone}
                helperText={errors.phone || 'Formato: (XX) XXXXX-XXXX'}
                InputProps={{
                  startAdornment: <PhoneIcon className={styles.inputIcon} />,
                }}
                placeholder="(11) 99999-9999"
                className={styles.textField}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Detalhes da mensagem"
                multiline
                rows={4}
                value={formData.details}
                onChange={handleInputChange('details')}
                error={!!errors.details}
                helperText={errors.details}
                InputProps={{
                  startAdornment: <MessageIcon className={styles.inputIcon} />,
                }}
                required
                className={styles.textField}
                placeholder="Descreva seu projeto, dúvida ou proposta..."
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isLoading}
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : <SendIcon />
                }
                className={styles.submitButton}
                fullWidth
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;
