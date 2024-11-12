import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Card, Button, Table, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Monitorias() {
  const [notifications, setNotifications] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [activeSection, setActiveSection] = useState('calendar-container');
  const [report, setReport] = useState('');
  const [students, setStudents] = useState([]);
  const [studentData, setStudentData] = useState({
      name: '',
      program: '',
      semester: '',
      course: '',
      schedule: '',
      classroom: ''
  });
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  
  // Estado para convocatorias
  const [convocatorias, setConvocatorias] = useState([]);
  const [convocatoriaData, setConvocatoriaData] = useState({
      title: '',
      date: '',
      monitor: '',
      status: 'Abierta'
  });
  const [selectedConvocatoriaIndex, setSelectedConvocatoriaIndex] = useState(null);
  const [showConvocatoriaModal, setShowConvocatoriaModal] = useState(false);
  const [notification, setNotification] = useState('');
  
  // Estado para manejar la monitoría seleccionada y la acción a realizar
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [actionInput, setActionInput] = useState('');
  
  // useEffect para inicializar las notificaciones y convocatorias
  useEffect(() => {
      const initialNotifications = [
          { id: 1, student: 'Juan Pérez', course: 'Matemáticas', date: '2024-10-01', reason: 'No asistió a la monitoría', read: false },
          { id: 2, student: 'María López', course: 'Historia', date: '2024-10-02', reason: 'Cita médica', read: false },
          { id: 3, student: 'Carlos Sánchez', course: 'Física', date: '2024-10-03', reason: 'Problemas personales', read: false },
          { id: 4, student: 'Ana García', course: 'Biología', date: '2024-10-04', reason: 'Enfermedad', read: false },
      ];
      setNotifications(initialNotifications);
  
      const initialConvocatorias = [
          { id: 1, title: 'Convocatoria de Monitoría', date: '2024-10-20', monitor: 'Dr. Martínez', status: 'Abierta' },
          { id: 2, title: 'Convocatoria para Exposición', date: '2024-10-22', monitor: 'Prof. Gómez', status: 'Cerrada' },
          { id: 3, title: 'Convocatoria de Ayuda Académica', date: '2024-10-25', monitor: 'Lic. López', status: 'Abierta' },
      ];
      setConvocatorias(initialConvocatorias);
  }, []);
  
  // Función para agregar un evento manualmente
  const handleAddEvent = () => {
      const newEvent = {
          id: Date.now(), // Identificador único para el evento
          title: studentData.title,
          start: studentData.schedule,  // Usamos el formato ISO para la fecha
          end: new Date(new Date(studentData.schedule).setHours(new Date(studentData.schedule).getHours() + 1)), // Establecemos la duración del evento en 1 hora
          classroom: studentData.classroom,
          allDay: false, // Si es un evento de todo el día o no
          extendedProps: {
              asistencia: 0,
              inasistencia: 0,
          }
      };
  
      setCalendarEvents([...calendarEvents, newEvent]); // Agrega el nuevo evento al calendario
      setNotification('Monitoría Agendada exitosamente'); // Muestra notificación
  };
  
  // Reprogramar una monitoría
  const handleReschedule = (event) => {
      setStudentData(event); // Carga el evento en el formulario para editarlo
      const handleReschedule = (event) => {
        setSelectedEvent({
          ...event,
          schedule: new Date(event.schedule).toISOString().slice(0, 16), // Convertir a formato 'YYYY-MM-DDTHH:mm'
        });
      };
      
  };
  
  // Guardar cambios después de reprogramar
  const handleSaveReschedule = () => {
      const updatedEvents = calendarEvents.map(event =>
          event.id === studentData.id ? { ...event, ...studentData } : event
      );
      setCalendarEvents(updatedEvents); // Actualiza el calendario con el evento reprogramado
      setNotification('Monitoría reprogramada con éxito'); // Muestra notificación
  };
  
  // Eliminar una monitoría
  const handleDelete = (id) => {
      const updatedEvents = calendarEvents.filter(event => event.id !== id);
      setCalendarEvents(updatedEvents); // Actualiza el calendario
      setNotification('Monitoría Eliminada'); // Muestra notificación
  };
  
  // Mostrar notificación
  {notification && (
      <div style={{ color: 'green', margin: '10px 0' }}>
          {notification}
      </div>
  )}
  
  // Maneja el clic en el evento del calendario
  const handleEventClick = (eventClickInfo) => {
      const event = eventClickInfo.event;
      setSelectedEvent(event); // Al hacer clic, seleccionamos el evento
  };
  
  // Maneja las acciones sobre el evento (reprogramar o eliminar)
  const handleEventAction = () => {
      if (actionInput.toUpperCase() === 'R') {
          const newDate = prompt('Ingrese la nueva fecha para la monitoría (YYYY-MM-DD HH:MM):');
          if (newDate) {
              const updatedEvent = { ...selectedEvent, start: new Date(newDate), end: new Date(new Date(newDate).setHours(new Date(newDate).getHours() + 1)) };
              setCalendarEvents((prevEvents) =>
                  prevEvents.map((event) => (event.id === selectedEvent.id ? updatedEvent : event))
              );
          }
      } else if (actionInput.toUpperCase() === 'E') {
          setCalendarEvents((prevEvents) =>
              prevEvents.filter((event) => event.id !== selectedEvent.id)
          );
      }
      setActionInput(''); 
      setSelectedEvent(null); 
  };
  
  // Mostrar la sección seleccionada
  const showSection = (section) => {
      setActiveSection(section);
  };
  
    const addStudent = () => {
        if (selectedStudentIndex !== null) {
            const updatedStudents = [...students];
            updatedStudents[selectedStudentIndex] = studentData;
            setStudents(updatedStudents);
        } else {
            setStudents([...students, studentData]);
        }
        setStudentData({ name: '', program: '', semester: '', course: '', schedule: '', classroom: '' });
        setShowStudentModal(false);
        setSelectedStudentIndex(null);
    };

    const editStudent = (index) => {
        setStudentData(students[index]);
        setSelectedStudentIndex(index);
        setShowStudentModal(true);
    };

    const deleteStudent = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prev => ({ ...prev, [name]: value }));
    };

    const markAsRead = (id) => {
        const updatedNotifications = notifications.map(notification => 
            notification.id === id ? { ...notification, read: true } : notification
        );
        setNotifications(updatedNotifications);
    };

    const closeAllEvents = () => {
        if (window.confirm('¿Estás seguro de que deseas cerrar todos los eventos?')) {
            setCalendarEvents([]); 
            alert('Todos los eventos han sido cerrados.');
        }
    };

    const generateReport = () => {
        setReport('Reporte generado con éxito.');
    };
    const handleRescheduleEvent = () => {
      const updatedEvents = calendarEvents.map(event => 
          event.id === studentData.id ? { ...event, ...studentData } : event
      );
      setCalendarEvents(updatedEvents);
  };
  
  const handleDeleteEvent = () => {
      const updatedEvents = calendarEvents.filter(event => event.id !== studentData.id);
      setCalendarEvents(updatedEvents);
  };
  

    const openConvocatoriaModal = () => {
        setConvocatoriaData({ title: '', date: '', monitor: '', status: 'Abierta' });
        setSelectedConvocatoriaIndex(null);
        setShowConvocatoriaModal(true);
    };

    const addConvocatoria = () => {
        if (selectedConvocatoriaIndex !== null) {
            const updatedConvocatorias = [...convocatorias];
            updatedConvocatorias[selectedConvocatoriaIndex] = convocatoriaData;
            setConvocatorias(updatedConvocatorias);
        } else {
            setConvocatorias([...convocatorias, { id: convocatorias.length + 1, ...convocatoriaData }]);
        }
        setShowConvocatoriaModal(false);
        setSelectedConvocatoriaIndex(null);
    };

    const editConvocatoria = (index) => {
        setConvocatoriaData(convocatorias[index]);
        setSelectedConvocatoriaIndex(index);
        setShowConvocatoriaModal(true);
    };

    const deleteConvocatoria = (index) => {
        const updatedConvocatorias = convocatorias.filter((_, i) => i !== index);
        setConvocatorias(updatedConvocatorias);
    };
    {calendarEvents.map(event => {
      const eventDate = new Date(event.schedule);
      const formattedDate = isNaN(eventDate) ? 'Fecha inválida' : eventDate.toLocaleString(); // Verifica si la fecha es válida
      return (
        <div key={event.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <strong>{event.title}</strong> - {formattedDate} - {event.classroom}
          </div>
          <div>
            <Button
              variant="warning"
              onClick={() => handleReschedule(event)}
              style={{ marginRight: '10px' }}
            >
              Reprogramar
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(event.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      );
    })}
    

    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
        },
        sidebar: {
            width: '250px',
            backgroundColor: '#343a40',
            color: 'white',
            position: 'fixed',
            height: '100%',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
        },
        sidebarTitle: {
            color: '#61dafb',
            fontSize: '1.5rem',
            marginBottom: '20px',
        },
        menuItem: {
            display: 'block',
            color: '#fff',
            textDecoration: 'none',
            margin: '10px 0',
            fontSize: '1rem',
            padding: '5px 0',
            borderBottom: '1px solid #444',
        },
        mainContent: {
            marginLeft: '250px',
            padding: '20px',
            flex: 1,
        },
        calendar: {
            width: '100%',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '10px',
        },
        report: {
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
        },
        buttonMargin: {
            marginRight: '10px',
        },
    };

    return (
      <div style={styles.container}>
      <aside style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Gestión de Monitorías</h2>
          <nav>
              <a href="#" onClick={() => showSection('calendar-container')} style={styles.menuItem}>
                  <i className="fa fa-calendar-alt"></i> Calendario
              </a>
              <a href="#" onClick={() => showSection('dashboard-container')} style={styles.menuItem}>
                  <i className="fa fa-user-graduate"></i> Dashboard de Estudiantes
              </a>
              <a href="#" onClick={() => showSection('notifications-container')} style={styles.menuItem}>
                  <i className="fa fa-bell"></i> Notificaciones
              </a>
              <a href="#" onClick={() => showSection('reportes')} style={styles.menuItem}>
                  <i className="fa fa-file-alt"></i> Reportes
              </a>
              <a href="#" onClick={() => showSection('cerrar-eventos')} style={styles.menuItem}>
                  <i className="fa fa-times-circle"></i> Cerrar Eventos
              </a>
              <a href="#" onClick={() => showSection('form-container')} style={styles.menuItem}>
                  <i className="fa fa-list-alt"></i> Convocatorias
              </a>
          </nav>
      </aside>
  
      <main style={{...styles.mainContent, padding: '20px', backgroundColor: '#f9f9f9'}}>
  {activeSection === 'calendar-container' && (
    <>
      <div style={{...styles.calendar, marginBottom: '30px'}}>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek,timeGridDay',
          }}
          events={calendarEvents}
        />
      </div>

      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '20px' }}>Agregar Monitoría</h2>
        <Form>
          <Form.Group controlId="formTitle" style={{ marginBottom: '15px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Título de la Monitoría</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={studentData.title}
              onChange={handleChange}
              placeholder="Título"
              required
              style={{ padding: '10px', borderRadius: '4px', boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)' }}
            />
          </Form.Group>
          <Form.Group controlId="formSchedule" style={{ marginBottom: '15px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Fecha y Hora</Form.Label>
            <Form.Control
              type="datetime-local"
              name="schedule"
              value={studentData.schedule}
              onChange={handleChange}
              required
              style={{ padding: '10px', borderRadius: '4px', boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)' }}
            />
          </Form.Group>
          <Form.Group controlId="formClassroom" style={{ marginBottom: '20px' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Aula Asignada</Form.Label>
            <Form.Control
              type="text"
              name="classroom"
              value={studentData.classroom}
              onChange={handleChange}
              placeholder="Aula"
              required
              style={{ padding: '10px', borderRadius: '4px', boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)' }}
            />
          </Form.Group>
          <Button style={{ width: '100%', padding: '12px', fontSize: '16px', backgroundColor: '#007bff', borderColor: '#007bff' }} onClick={handleAddEvent}>
            Agendar Monitoria
          </Button>
        </Form>
                      {/* Mostrar notificación */}
                      {notification && (
                          <div style={{ color: 'green', margin: '10px 0' }}>
                              {notification}
                          </div>
                      )}
  
                      {/* Menú para gestionar monitorías agendadas */}
                      <div style={{ marginTop: "30px" }}>
                          <h3>Monitorías Agendadas</h3>
                          {calendarEvents.map(event => (
                              <div key={event.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                  <div>
                                      <strong>{event.title}</strong> - {new Date(event.schedule).toLocaleString()} - {event.classroom}
                                  </div>
                                  <div>
                                  <Button 
  variant="warning" 
  onClick={() => handleReschedule(event)} 
  style={{ marginRight: '10px' }} // Añadimos un margen derecho
>
  Reprogramar
</Button>
<Button 
  variant="danger" 
  onClick={() => handleDelete(event.id)} 
>
  Eliminar
</Button>

                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </>
          )}
                {activeSection === 'dashboard-container' && (
                    <div>
                        <h2>Dashboard de Estudiantes</h2>
                        <Button variant="primary" onClick={() => setShowStudentModal(true)}>Agregar Estudiante</Button>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Programa</th>
                                    <th>Semestre</th>
                                    <th>Curso</th>
                                    <th>Horario</th>
                                    <th>Aula Asignada</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.program}</td>
                                        <td>{student.semester}</td>
                                        <td>{student.course}</td>
                                        <td>{student.schedule}</td>
                                        <td>{student.classroom}</td>
                                        <td>
                                            <Button variant="warning" onClick={() => editStudent(index)} style={styles.buttonMargin}>
                                                Editar
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteStudent(index)}>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Modal show={showStudentModal} onHide={() => setShowStudentModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedStudentIndex !== null ? 'Editar Estudiante' : 'Agregar Estudiante'}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name="name" value={studentData.name} onChange={handleChange} placeholder="Nombre del Estudiante" required />
                                    </Form.Group>
                                    <Form.Group controlId="formProgram">
                                        <Form.Label>Programa</Form.Label>
                                        <Form.Control type="text" name="program" value={studentData.program} onChange={handleChange} placeholder="Programa" required />
                                    </Form.Group>
                                    <Form.Group controlId="formSemester">
                                        <Form.Label>Semestre</Form.Label>
                                        <Form.Control as="select" name="semester" value={studentData.semester} onChange={handleChange} required>
                                            {[...Array(11).keys()].slice(1).map((sem) => (
                                                <option key={sem} value={sem}>
                                                    {sem}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="formCourse">
                                        <Form.Label>Curso</Form.Label>
                                        <Form.Control type="text" name="course" value={studentData.course} onChange={handleChange} placeholder="Curso" required />
                                    </Form.Group>
                                    <Form.Group controlId="formSchedule">
                                        <Form.Label>Horario</Form.Label>
                                        <Form.Control type="text" name="schedule" value={studentData.schedule} onChange={handleChange} placeholder="Horario" required />
                                    </Form.Group>
                                    <Form.Group controlId="formClassroom">
                                        <Form.Label>Aula Asignada</Form.Label>
                                        <Form.Control type="text" name="classroom" value={studentData.classroom} onChange={handleChange} placeholder="Aula Asignada" required />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowStudentModal(false)}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={addStudent}>
                                    {selectedStudentIndex !== null ? 'Guardar Cambios' : 'Agregar Estudiante'}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}

                {activeSection === 'notifications-container' && (
                    <div>
                        <h2>Notificaciones</h2>
                        <ul>
                            {notifications.map((notification) => (
                                <li key={notification.id} style={{ textDecoration: notification.read ? 'line-through' : 'none' }}>
                                    {notification.student} en {notification.course} - {notification.reason} ({notification.date})
                                    <button onClick={() => markAsRead(notification.id)} style={{ marginLeft: '10px' }}>
                                        {notification.read ? 'Leída' : 'Marcar como leída'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeSection === 'reportes' && (
                    <div>
                        <h2>Reportes</h2>
                        <Button onClick={generateReport} style={styles.addButton}>Generar Reporte</Button>
                        <div style={styles.report}>{report}</div>
                    </div>
                )}

                {activeSection === 'cerrar-eventos' && (
                    <div>
                        <h2>Cerrar Eventos</h2>
                        <Button variant="danger" onClick={closeAllEvents}>Cerrar Todos los Eventos</Button>
                    </div>
                )}

                {activeSection === 'form-container' && (
                    <div>
                        <h2>Convocatorias</h2>
                        <Button variant="primary" onClick={openConvocatoriaModal}>Nueva Convocatoria</Button>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Fecha</th>
                                    <th>Monitor</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {convocatorias.map((convocatoria, index) => (
                                    <tr key={convocatoria.id}>
                                        <td>{convocatoria.title}</td>
                                        <td>{convocatoria.date}</td>
                                        <td>{convocatoria.monitor}</td>
                                        <td>{convocatoria.status}</td>
                                        <td>
                                            <Button variant="warning" onClick={() => editConvocatoria(index)} style={styles.buttonMargin}>
                                                Editar
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteConvocatoria(index)}>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Modal show={showConvocatoriaModal} onHide={() => setShowConvocatoriaModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedConvocatoriaIndex !== null ? 'Editar Convocatoria' : 'Nueva Convocatoria'}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formTitle">
                                        <Form.Label>Título</Form.Label>
                                        <Form.Control type="text" name="title" value={convocatoriaData.title} onChange={(e) => setConvocatoriaData({ ...convocatoriaData, title: e.target.value })} placeholder="Título de la Convocatoria" required />
                                    </Form.Group>
                                    <Form.Group controlId="formDate">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" name="date" value={convocatoriaData.date} onChange={(e) => setConvocatoriaData({ ...convocatoriaData, date: e.target.value })} required />
                                    </Form.Group>
                                    <Form.Group controlId="formMonitor">
                                        <Form.Label>Monitor</Form.Label>
                                        <Form.Control type="text" name="monitor" value={convocatoriaData.monitor} onChange={(e) => setConvocatoriaData({ ...convocatoriaData, monitor: e.target.value })} placeholder="Nombre del Monitor" required />
                                    </Form.Group>
                                    <Form.Group controlId="formStatus">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control as="select" name="status" value={convocatoriaData.status} onChange={(e) => setConvocatoriaData({ ...convocatoriaData, status: e.target.value })}>
                                            <option value="Abierta">Abierta</option>
                                            <option value="Cerrada">Cerrada</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowConvocatoriaModal(false)}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" onClick={addConvocatoria}>
                                    {selectedConvocatoriaIndex !== null ? 'Guardar Cambios' : 'Crear Convocatoria'}
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
            </main>
        </div>
    );
}
