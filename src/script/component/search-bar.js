class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
        

    .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(8, 7, 7, 0.2);
        padding: 8px;
        border-radius: 50px;
        display: flex;
        top: 10px;
        background-color: white;
    }

    .search-container > input {
        width: 90%;
        padding: 13px;
        border: 0;
        border: 4px solid rgb(73, 228, 163);
        font-weight: bold;
        border-radius: 50px;
    }

    .search-container > input:focus {
        outline: 0;
        border: 2px solid rgb(73, 228, 163);
    }

    .search-container > input:focus::placeholder {
        font-weight: bold;
    }

    .search-container >  input::placeholder {
        color: teal;
        font-weight: normal;
    }

    .search-container > button {
        width: 10%;
        cursor: pointer;
        margin-left: 3%;
        padding: 10px;
        background-color: white;
        color: teal;
        border-radius: 50px;
        border: 4px solid rgb(73, 228, 163);
    }

    @media screen and (max-width: 550px){
        .search-container {
            flex-direction: column;
            position: static;
        }

        .search-container > input {
            width: 100%;
            margin-bottom: 12px;
        }

        .search-container > button {
            width: 100%;
        }
    }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search meal" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">GO</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);