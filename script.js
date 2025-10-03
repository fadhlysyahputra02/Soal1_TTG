document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
        showModal(
            "Nama Tidak Boleh Kosong",
            "Harap isi nama lengkap Anda.",
            "error"
        );
        return;
    }
    
    if (email === "") {
        showModal(
            "Email Tidak Boleh Kosong",
            "Harap isi alamat email Anda.",
            "error"
        );
        return;
    }

    if (!emailRegex.test(email)) {
        showModal(
            "Email Tidak Valid",
            "Pastikan format email sudah benar. Contoh: nama@email.com",
            "error"
        );
        return;
    }

    if (password === "") {
        showModal(
            "Password Tidak Boleh Kosong",
            "Harap isi password Anda.",
            "error"
        );
        return;
    }

    if (password.length < 8) {
        showModal(
            "Password Terlalu Pendek",
            "Password harus minimal 8 karakter.",
            "error"
        );
        return;
    }

    if (confirmPassword === "") {
        showModal(
            "Konfirmasi Tidak Boleh Kosong",
            "Harap isi konfirmasi password untuk memastikan kesesuaian.",
            "error"
        );
        return;
    }

    if (password !== confirmPassword) {
        showModal(
            "Konfirmasi Password Salah",
            "Password dan konfirmasi tidak cocok.",
            "error"
        );
        return;
    }


    showModal(
        "✅ Pendaftaran Berhasil",
        "Akun Anda berhasil didaftarkan!",
        "success"
    );

    document.getElementById("registerForm").reset();
});

function showModal(title, message, type) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalIcon = document.getElementById("modal-icon");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    // Reset icon
    modalIcon.className = "modal-icon";
    modalIcon.innerHTML = type === "error" ? "❌" : "✅";
    modalIcon.classList.add(type === "error" ? "error" : "success");

    modal.classList.add("show");
}

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("show");
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
