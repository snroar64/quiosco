export const api = {
  async get(url: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      next: { revalidate: 3600 },
      headers: {
        'Content-Type': 'application/json',
        // Agrega headers de autenticación si necesitas
        // 'Authorization': `Bearer ${token}`
      },
    });

    if (!res.ok) throw new Error('Sometime went wrong');
    return res.json();
  },

  async post(url: string, data: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Error en la petición');
    return res.json();
  },

  async put(url: string, data: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Error en la petición');
    return res.json();
  },

  async delete(url: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Error en la petición');
    return res.json();
  },
};
