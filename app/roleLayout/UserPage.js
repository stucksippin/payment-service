import UserLayout from './UserLayout';

function UserPage() {
    return (
        <div>
          <h1>Юзер</h1>
          {/* Другой контент для страницы администратора */}
        </div>
      );
}

export default function User() {
    return (

        <UserLayout>
            <UserPage />
        </UserLayout>
    );
}
