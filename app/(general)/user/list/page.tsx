import { UsersPage } from "@/app/components/User/list/userList";

export default function ListUsers() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Usuarios</h1>
            <UsersPage />
        </div>
    );
}