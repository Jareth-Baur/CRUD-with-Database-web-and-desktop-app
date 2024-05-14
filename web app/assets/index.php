<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Application</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2>User Management</h2>
    <form method="post" id="userForm">
        <input type="text" name="username" placeholder="Username" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <select name="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        <input type="submit" value="Add User">
    </form>

    <table id="userTable">
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Registration Date</th>
            <th>Actions</th>
        </tr>
    </table>

    <h2>Product Management</h2>
    <form method="post" id="productForm">
        <input type="text" name="name" placeholder="Name" required>
        <textarea name="description" placeholder="Description" required></textarea>
        <input type="number" name="price" placeholder="Price" step="0.01" min="0" required>
        <input type="number" name="quantity" placeholder="Quantity" min="0" required>
        <input type="text" name="category" placeholder="Category" required>
        <input type="submit" value="Add Product">
    </form>

    <table id="productTable">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
        </tr>
    </table>
    <!-- Edit User Modal -->
    <div id="editUserModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Edit User</h2>
            <form id="editUserForm">
                <input type="hidden" id="editUserId" name="userId">
                <label for="editUsername">Username:</label>
                <input type="text" id="editUsername" name="username" required>
                <label for="editEmail">Email:</label>
                <input type="email" id="editEmail" name="email" required>
                <label for="editRole">Role:</label>
                <select id="editRole" name="role">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <input type="submit" value="Save Changes">
            </form>
        </div>
    </div>

    <!-- Edit Product Modal -->
    <div id="editProductModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Edit Product</h2>
            <form id="editProductForm">
                <input type="hidden" id="editProductId" name="productId">
                <label for="editProductName">Name:</label>
                <input type="text" id="editProductName" name="name" required>
                <label for="editProductDescription">Description:</label>
                <textarea id="editProductDescription" name="description" required></textarea>
                <label for="editProductPrice">Price:</label>
                <input type="number" id="editProductPrice" name="price" step="0.01" min="0" required>
                <label for="editProductQuantity">Quantity:</label>
                <input type="number" id="editProductQuantity" name="quantity" min="0" required>
                <label for="editProductCategory">Category:</label>
                <input type="text" id="editProductCategory" name="category" required>
                <input type="submit" value="Save Changes">
            </form>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="script.js"></script>
</body>

</html>