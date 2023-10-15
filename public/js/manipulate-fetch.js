const originalFetch = window.fetch;

window.fetch = async function (...args) {
    const body = document.querySelector("body");
    const lds_contianer = document.createElement("div");
    lds_contianer.classList.add("lds-container");
    const lds_ellipsis= document.createElement("div");
    lds_ellipsis.classList.add("lds-ellipsis");
    for (let index = 0; index < 4; index++) {
        const element = document.createElement("div");
        lds_ellipsis.append(element);
        
    }
    lds_contianer.append(lds_ellipsis)
    body.append(lds_contianer)
    lds_contianer.style.display = "flex";
    try {
        const response = await originalFetch.apply(this, args);
        return response;
    }finally {
        lds_contianer.style.display = "none"      

    }
 
};