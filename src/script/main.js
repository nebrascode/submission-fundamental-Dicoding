function main() {
    const getMenu = () => {

    };


    const renderAllMenu = (Meals) => {
        const listMealElement = document.querySelector('#list-menu');
        listMealElement.innerHTML = '';

        Meals.forEach(meal => {
            listMealElement.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="src/asset/example.jpg" class="img-menu" alt="menu">
                <div class="menu-body">
                    <h5 class="menu-title">Card title</h5>
                    <p class="menu-text">Ingredients: <span></span>
                    </p>
                    <a href="#" class="btn btn-primary">Cooking</a>
                </div>
            </div>
            `;
        });

        const buttons=document.querySelectorAll('.btn-primary');
        
    }
}