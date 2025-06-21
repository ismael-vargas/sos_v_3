import api from './api';

export interface Cliente {
  id?: number;
  nombre: string;
  correo_electronico: string;
  cedula_identidad: string;
  direccion: string;
  estado?: string; // Permitir cualquier string
  numero_ayudas?: number;
  contrasena_hash: string;
  estado_eliminado?: string; // Permitir cualquier string
}

// Obtener todos los clientes
export const getClientes = async (): Promise<Cliente[]> => {
  const response = await api.get('/clientes');
  return response.data;
};

// Obtener un cliente por ID
export const getClienteById = async (id: number): Promise<Cliente> => {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
};

// Crear un nuevo cliente
export const crearCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await api.post('/registro-clientes', cliente);
  return response.data;
};

// Actualizar un cliente por ID
export const updateCliente = async (id: number, cliente: Partial<Cliente>): Promise<Cliente> => {
  const response = await api.put(`/clientes/${id}`, cliente);
  return response.data;
};

// Eliminar un cliente por ID
export const deleteCliente = async (id: number): Promise<void> => {
  await api.delete(`/clientes/${id}`);
};