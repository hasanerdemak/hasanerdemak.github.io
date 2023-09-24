// Function to open a tab
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active-content');
    });

    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active-content');

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const clickedButton = document.querySelector(`.tab[data-tab="${tabName}"]`);
    clickedButton.classList.add('active');

    /*var element = document.getElementById(tabName);
    element.scrollIntoView({block: "start" });*/

    var myDiv = document.getElementById('main');
    myDiv.scrollTop = 0;
    
}

// Initialize the first tab
openTab('home');



// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    content.style.paddingLeft = '0';

    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-200%)'
    } else {
        sidebar.style.transform = 'translateX(0px)';
    }
}

// Event listener for the sidebar toggle button
document.getElementById('sidebar-toggle-button').addEventListener('click', toggleSidebar);

// Function to handle window resize
function handleResize() {
    const windowWidth = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const container = document.querySelector('.container');
    const mobileHeader = document.querySelector('.mobile-header');
    
    if (windowWidth <= 1000) { // Adjust the breakpoint as needed
        mobileHeader.style.display = 'flex';
        sidebar.style.transform = 'translateX(-200%)'
        content.style.position= 'absolute';
        content.style.paddingLeft = '0';

        container.style.marginTop = '60px'
    } else {
        mobileHeader.style.display = 'none';
        sidebar.style.transform = 'translateX(0px)';
        content.style.position= 'relative';
        content.style.paddingLeft = '20px';

        container.style.marginTop = '0px'
    }
}

// Initial setup and window resize event listener
handleResize();
window.addEventListener('resize', handleResize);




// Mobil başlık açma düğmesini seçin
const openSidebarButton = document.getElementById('sidebar-toggle-button');


// Sidebar'ı seçin
const sidebar = document.querySelector('.sidebar');

// Sayfa yüklendiğinde varsayılan olarak kapalı olsun
let isSidebarOpen = false;

// Mobil başlık açma düğmesine tıklama olayı ekleyin
openSidebarButton.addEventListener('click', () => {
    if (!isSidebarOpen) {
        // Sidebar'ı aç
        sidebar.style.transform = 'translateX(0)';
        isSidebarOpen = true;
    } else {
        // Sidebar'ı kapat
        sidebar.style.transform = 'translateX(-200%)';
        isSidebarOpen = false;
    }
});

sidebar.addEventListener('click', () => {
    if(window.innerWidth > 1000){
        return;
    }
    if (!isSidebarOpen) {
        // Sidebar'ı aç
        sidebar.style.transform = 'translateX(0)';
        isSidebarOpen = true;
    } else {
        // Sidebar'ı kapat
        sidebar.style.transform = 'translateX(-200%)';
        isSidebarOpen = false;
    }
});