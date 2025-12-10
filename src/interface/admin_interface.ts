interface AdminInterface {
    admin_name: string;  // required
    id?: string;         // optional (Sequelize will generate it)
}

export default AdminInterface;
