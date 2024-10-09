import React from 'react';

const EditarPerfil = ({ user }) => {
  return (
    <div>
      <h2>Editar Perfil</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" defaultValue={user.name} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" defaultValue={user.email} />
        </div>
        <div>
          <label>Rol:</label>
          <input type="text" defaultValue={user.role} />
        </div>
        <div>
          <label>País:</label>
          <input type="text" defaultValue={user.pais} />
        </div>
        <div>
          <label>Ciudad:</label>
          <input type="text" defaultValue={user.ciudad} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarPerfil;
