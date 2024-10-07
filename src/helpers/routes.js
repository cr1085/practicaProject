const routes={
    home:  "/",
    login: "/login",
    register:"/register",
    account:"/account",
    projects:"/projects",
    monitorias:"/monitorias",
    escuelas_de_formacion:"/escuelas_de_formacion",
    atencion_medica:"/atencion_medica",
    atencion_psicologica:"/atencion_psicologica",
    seguimineto_tae:"/seguimiento_tae",
    project:(projectId)=>projectId ? `/projects/${projectId}` : '/projects/:projectId',    
    admin:{
        users:'/admin/users'
    }
};

export default routes;