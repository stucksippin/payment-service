

import AdminLayout from './AdminLayout';

function AdminPage() {
  return (
    <h1>админ</h1>
  );
}

// Используйте AdminLayout для обертывания AdminPage
export default function Admin() {
  return (
  
    <AdminLayout>
      <AdminPage />
    </AdminLayout>
  );
}
