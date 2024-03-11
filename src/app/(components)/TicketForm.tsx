"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";


const TicketForm = ({ ticket }: { ticket: ITicket | null }  ) => {

  const EDITMODE = Boolean(ticket);

  const router = useRouter();

  let startingTicketData = {
    title: '',
    description: '',
    priority: 1,
    status: 'not started',
    category: 'hardware',
    createdAt: new Date()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
  
    setFormData(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (EDITMODE && ticket) {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: 'PUT',
          body: JSON.stringify({formData}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!res.ok) {
          throw new Error("Failed to update ticket");
        }
      } else {
        const res = await fetch("/api/Tickets", {
          method: 'POST',
          body: JSON.stringify({formData}),
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (!res.ok) {
          throw new Error("Failed to create ticket");
        }
      }

  
  
      router.push('/');
      router.refresh();
      
    } catch (error) {
      console.error(error);
    }
  }

  if (EDITMODE && ticket) {
    const { _id, ...ticketUpdatableData } = ticket;
    startingTicketData = { ...ticketUpdatableData }
  }
  

  const [formData, setFormData] = useState(startingTicketData);
  return (
	<div className="flex justify-center">
    <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
      <h3>{EDITMODE ? 'Actualizar ticket' : 'Crear Ticket'}</h3>
      <label>Titulo</label>
      <input
        id="title"
        name="title"
        type="text"
        required={true}
        value={formData.title}
        onChange={handleChange}
      />
  
      <label>Descripción</label>
      <textarea
        id="description"
        name="description"
        rows={5}
        required={true}
        value={formData.description}
        onChange={handleChange}
      />

      <label>Categoría</label>
      <select name="category" id="category" value={formData.category} onChange={handleChange}>
        <option value="hardware">Hardware</option>
        <option value="software">Software</option>
        <option value="other">Otra</option>
      </select>

      <label>Prioridad</label>
      <div>
        <input
          id="priority-1"
          name="priority"
          type="radio"
          value={1}
          checked={formData.priority == 1}
          onChange={handleChange}
        />
        <label>1</label>
        <input
          id="priority-2"
          name="priority"
          type="radio"
          value={2}
          checked={formData.priority == 2}
          onChange={handleChange}
        />
        <label>2</label>
        <input
          id="priority-3"
          name="priority"
          type="radio"
          value={3}
          checked={formData.priority == 3}
          onChange={handleChange}
        />
        <label>3</label>
        <input
          id="priority-4"
          name="priority"
          type="radio"
          value={4}
          checked={formData.priority == 4}
          onChange={handleChange}
        />
        <label>4</label>
        <input
          id="priority-5"
          name="priority"
          type="radio"
          value={5}
          checked={formData.priority == 5}
          onChange={handleChange}
        />
        <label>5</label>
      </div>
      <label>Estado</label>
      <select name="status" id="status" value={formData.status} onChange={handleChange}>
        <option value="not started">Sin empezar</option>
        <option value="started">Empezado</option>
        <option value="done">Hecho</option>
      </select>
      <input type="submit" className="btn" value={EDITMODE ? 'Actualizar ticket' : 'Crear Ticket'} />
    </form>
  </div>
  )
}

export default TicketForm