export const BitFieldPermissions = {
    ViewPublicPages: 1 << 0, // 1
    ViewPrivatePages: 1 << 1, // 2
    Administrator: 1 << 2, // 4
    // Total = 7
};

export const ROLES = [
    {
        name: "User",
        key: "user",
        permissions: BitFieldPermissions.ViewPublicPages,
    },
    {
        name: "Admin",
        key: "admin",
        permissions:
            BitFieldPermissions.ViewPublicPages |
            BitFieldPermissions.ViewPrivatePages |
            BitFieldPermissions.Administrator,
    },
];
