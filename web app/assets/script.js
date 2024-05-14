$(document).ready(function () {
    // Function to reset edit user form fields
    function resetEditUserForm() {
        $('#editUserForm')[0].reset();
    }

    // Function to reset edit product form fields
    function resetEditProductForm() {
        $('#editProductForm')[0].reset();
    }

    // Event listener for closing edit user modal
    $('#editUserModal .close').click(function () {
        $('#editUserModal').css('display', 'none');
        resetEditUserForm();
    });

    // Event listener for closing edit product modal
    $('#editProductModal .close').click(function () {
        $('#editProductModal').css('display', 'none');
        resetEditProductForm();
    });

    // Fetch and display users and products on page load
    fetchUsers();
    fetchProducts();

    // Function to fetch and display users
    function fetchUsers() {
        $.ajax({
            url: 'fetch_users.php',
            type: 'POST',
            success: function (response) {
                $('#userTable tbody').html(response);
            }
        });
    }

    // Function to fetch and display products
    function fetchProducts() {
        $.ajax({
            url: 'fetch_products.php',
            type: 'POST',
            success: function (response) {
                $('#productTable tbody').html(response);
            }
        });
    }

    // Add User form submission
    $('#userForm').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: 'add_user.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log('User added successfully:', response);
                fetchUsers();
                $('#userForm')[0].reset();
            },
            error: function (xhr, status, error) {
                console.error('Error adding user:', error);
            }
        });
    });

    // Add Product form submission
    $('#productForm').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: 'add_product.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log('Product added successfully:', response);
                fetchProducts();
                $('#productForm')[0].reset();
            },
            error: function (xhr, status, error) {
                console.error('Error adding product:', error);
            }
        });
    });


    // Event listener for edit user button click
    $('#userTable').on('click', '.edit-user', function () {
        var userId = $(this).closest('tr').find('td:first').text();
        // Fetch user details for editing
        $.ajax({
            url: 'get_user.php',
            type: 'POST',
            data: {
                userId: userId
            },
            success: function (response) {
                // Log the response to console
                console.log('User response:', response);
                var userData = JSON.parse(response);
                // Populate edit user form fields
                $('#editUserId').val(userData.ID);
                $('#editUsername').val(userData.Username);
                $('#editEmail').val(userData.Email);
                $('#editRole').val(userData.Role);
                // Show the edit user modal
                $('#editUserModal').css('display', 'block');
            }
        });
    });

    // Event listener for edit product button click
    $('#productTable').on('click', '.edit-product', function () {
        var productId = $(this).closest('tr').find('td:first').text();
        // Fetch product details for editing
        $.ajax({
            url: 'get_product.php',
            type: 'POST',
            data: {
                productId: productId
            },
            success: function (response) {
                console.log('Product response:',
                    response); // Log the response to console
                var productData = JSON.parse(response);
                // Populate edit product form fields
                $('#editProductId').val(productData.ID);
                $('#editProductName').val(productData.Name);
                $('#editProductDescription').val(productData.Description);
                $('#editProductPrice').val(productData.Price);
                $('#editProductQuantity').val(productData.Quantity);
                $('#editProductCategory').val(productData.Category);
                // Show the edit product modal
                $('#editProductModal').css('display', 'block');
            }
        });
    });

    // Event listener for delete user button click
    $('#userTable').on('click', '.delete-user', function () {
        var userId = $(this).closest('tr').find('td:first').text();
        // Confirm deletion
        if (confirm("Are you sure you want to delete this user?")) {
            // Delete user
            $.ajax({
                url: 'delete_user.php',
                type: 'POST',
                data: {
                    userId: userId
                },
                success: function (response) {
                    fetchUsers(); // Refresh user table
                }
            });
        }
    });

    // Event listener for delete product button click
    $('#productTable').on('click', '.delete-product', function () {
        var productId = $(this).closest('tr').find('td:first').text();
        // Confirm deletion
        if (confirm("Are you sure you want to delete this product?")) {
            // Delete product
            $.ajax({
                url: 'delete_product.php',
                type: 'POST',
                data: {
                    productId: productId
                },
                success: function (response) {
                    fetchProducts(); // Refresh product table
                }
            });
        }
    });

    // Event listener for saving edited user details
    $('#editUserForm').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: 'edit_users.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log('User details updated successfully:', response);
                $('#editUserModal').css('display', 'none');
                fetchUsers();
                resetEditUserForm(); // Reset edit user form
            },
            error: function (xhr, status, error) {
                console.error('Error updating user details:', error);
            }
        });
    });

    // Event listener for saving edited product details
    $('#editProductForm').submit(function (e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: 'edit_product.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                console.log('Product details updated successfully:', response);
                $('#editProductModal').css('display', 'none');
                fetchProducts();
                resetEditProductForm(); // Reset edit product form
            },
            error: function (xhr, status, error) {
                console.error('Error updating product details:', error);
            }
        });
    });
});