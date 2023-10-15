const storage = [];
const imgInput = document.querySelector("input");
const previewImage = document.getElementById("previewImage");
const imageContainer = document.getElementById("imageContainer");
const sendButton = document.querySelector("button.send-btn")
imgInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = document.createElement("img");
            const stylesObject = {
                maxHeight:"200px"
            }
            Object.assign(image.style,stylesObject);
            image.classList.add("product-image")
            image.src = e.target.result;
            imageContainer.append(image);
            storage.push(file);
        };
        reader.readAsDataURL(file);
    }
})


sendButton.addEventListener("click", async () => {
    const urls = await Promise.all(
        storage.map(async (file) => {
            const { url } = await fetch("/s3url").then((res) => res.json());

            const formData = new FormData();
            formData.append("file", file);

            await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "multipart/form-data",

                },
                body: file
            })

            return url.split("?")[0];
        })
    );
    console.log("Uploaded URLs:", urls);
    urls.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        const styles = {
            width: "300px",
            height: "300px",
        };
        Object.assign(img.style, styles);
        document.querySelector("section").appendChild(img);
    });
});