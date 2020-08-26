const user = {
    name: 'anandman03',
    repo: 'sorting-and-searching-visualizer'
}

document.write(`
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
                <div> <h4> 
                    <a href="https://${user.name}.github.io/${user.repo}/"> Searching & Sorting Visualizer </a> 
                </h4> </div>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/linear-search.html">Linear Search</a></li>
                <li><a href="https://${user.name}.github.io/${user.repo}/views/binary-search.html">Binary Search</a></li>
                <li><a href="#">Bubble Sort</a></li>
                <li><a href="#">Selection Sort</a></li>
            </ul>
        
        </div>
    </nav>
    <br>`
)