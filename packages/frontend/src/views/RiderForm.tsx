import { Button, Grid, Stack, TextField, Typography, Alert } from "@mui/material";
import { Rider } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { BackendUrl } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RiderForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Rider>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setIsEdit(true);

      axios.get(`${BackendUrl}/riders/${id}`)
        .then(response => {
          const rider = response.data;
          setValue("username", rider.username);
          setValue("firstName", rider.firstName);
          setValue("lastName", rider.lastName);
          setValue("phoneNumber", rider.phoneNumber);
          setValue("email", rider.email);
          setValue("notes", rider.notes);
        })
        .catch(error => {
          console.error("Error fetching rider data: ", error);
        });
    }
  }, [id, setValue]);

  const onSubmit: SubmitHandler<Rider> = (data) => {
    setServerError(null);
    console.log("Data: ", data)
    if (isEdit) {
      axios.put(`${BackendUrl}/riders/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Response: ", response);
        navigate('/riders');
      })
      .catch(error => {
        const errorMessage = error.response ? error.response.data : error.message;
        setServerError(errorMessage);
        console.error("Error: ", errorMessage);
      });
    } else {
      axios.post(`${BackendUrl}/riders`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Response: ", response);
        navigate('/riders');
      })
      .catch(error => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        setServerError(errorMessage);
        console.error("Error: ", errorMessage);
      });
    }
  }

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" sx={{ p: 5 }}>
      <Typography variant="h3" sx={{ p: 3 }}>
        {isEdit ? "Bearbeite die fahrende Person" : "Hier kannst du eine neue fahrende Person hinzufügen:"}
      </Typography>
      {serverError && <Alert severity="error">{serverError}</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} sx={{ pt: 5 }}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              variant="filled" 
              label="Username" 
              {...register("username", { required: "Username is required" })} 
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              variant="filled" 
              label="Vorname" 
              {...register("firstName", { required: "First name is required" })} 
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              variant="filled" 
              label="Nachname"
              {...register("lastName", { required: "Last name is required" })} 
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              variant="filled" 
              label="Telefon"
              {...register("phoneNumber", { required: "Phone number is required" })} 
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              variant="filled" 
              label="E-Mail" 
              {...register("email", { required: "Email is required" })} 
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              variant="filled" 
              multiline 
              maxRows={4} 
              label="Notizen" 
              {...register("notes")}
            />
          </Grid>
          <Grid item xs={12} justifyContent="flex-end">
            <Button 
              variant="contained" 
              type="submit" 
              sx={{ p: 2, m: 1 }}
            >
              {isEdit ? "Änderungen speichern" : "Hinzufügen"}
            </Button>
            <Button 
              variant="outlined" 
              color="error"
              type="reset" 
              sx={{ p: 2, m: 1 }}
            >
              Zurücksetzen
            </Button>
          </Grid>
        </Grid>
      </form>
    </Stack>
  );
}