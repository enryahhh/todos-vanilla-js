


const addCollection = ()=>{
  const collectionElm = document.getElementById("collection-list");
  const collection = document.getElementById("input-collection");
  collectionElm.insertAdjacentHTML('beforeend',createCollectionItem(collection.value));
  collection.value = '';
  modal.style.display = "none";
}


const createCollectionItem = (collection)=>
          `<div class="kotak collection-item">
                <div class="kotak-content">
                <h3>${collection}</h3>
                <p>0/0 Done</p>
                <div class="progress-bar">
                  <!-- <span class="percent">0%</span> -->
                </div>
              </div>
          </div>`;


// MODAL DOM
const modal = document.getElementsByClassName("modal");
function openModal(elm,indexModal){
  const idColl = elm.getAttribute('data-id');
  // const idModal = modal[indexModal].getAttribute('id');
  modal[indexModal].style.display = "block";
  console.log(modal[indexModal].getAttribute('id'));
}

function closeModal(indexModal){
  modal[indexModal].style.display = "none";
}

// Get the button that opens the modal
const btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}