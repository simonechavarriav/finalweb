import { getUsers } from "@/app/services/getUsers"

export const UsersPage = async () => {
    const users = await getUsers()

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Usuarios</h1>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="bg-gray-100 p-2 rounded">
                        <div>
                            <strong>Nombre:</strong> {user.name}
                        </div>
                        <div>
                            <strong>Email:</strong> {user.email}
                        </div>
                        <div>
                            <strong>Rol:</strong> {user.role}
                        </div>
                        <div>
                            <strong>Estado de sujeto de prueba:</strong> {user.test_subject_status ? "Sí" : "No"}
                        </div>
                        <div>
                            <strong>Historial de compras:</strong>{" "}
                            {Array.isArray(user.purchase_history)
                                ? user.purchase_history.join(", ")
                                : "Sin historial"}
                        </div>
                        <div>
                            <strong>Reacciones alérgicas:</strong>{" "}
                            {Array.isArray(user.allergic_reactions)
                                ? user.allergic_reactions.join(", ")
                                : "Sin historial"}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
