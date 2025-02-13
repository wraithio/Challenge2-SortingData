let pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
];

let sortBtns = [BtnID, BtnFN, BtnLN, BtnH, BtnA];

let displayBtns = [Btn10, Btn20, Btn30, Btn40, Btn50];

//PARAMETERS ON LOAD
let count = 10;
let category = "ID";
let descend = false;
BtnID.style.backgroundColor = "black";
BtnID.style.color = "white";
Btn10.style.backgroundColor = "black";
Btn10.style.color = "white";

//FETCH
let generatePeople = async () => {
  const promise = await fetch("../data/data.json");
  const data = await promise.json();
  // console.log(data.People)
  return data.People;
};

let resetPages = () => {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList = "d-block";
  }
};

//DIVIDE ENTRIES BY CATEGORY/PAGE COUNT AND HIDE EXTRA PAGE BUTTONS
let createEntries = async (category, section) => {
  resetPages();
  resultBlock.innerText = "";

  let arr = await sortResults(category);
  //   console.log(arr);
  let resultArr = [];
  for (let i = 0; i < arr.length; i += section) {
    const splicedArr = arr.slice(i, i + section);
    resultArr.push(splicedArr);
  }
  //   console.log(resultArr);
  const splicedPages = pages.slice(resultArr.length, pages.length);
  const displayPages = pages.slice(0, resultArr.length);

  //   hides extra page buttons
  for (let i = 0; i < splicedPages.length; i++) {
    splicedPages[i].className = "d-none";
  }

  for (let i = 0; i < displayPages.length; i++) {
    displayPages[i].addEventListener("click", () => {
      console.log(`Page: ${i + 1}`);
      pageNum.innerText = `Page: ${i + 1}`;
      displayEntries(resultArr[i]);
    });
  }
  pageNum.innerText = `Page: 1`;
  console.log(`Page: 1`);
  displayEntries(resultArr[0]);

  // console.log(people)
  // let peoplePage = people.slice(0,section)
};

//PASTE ENTRIES ON SCREEN
let displayEntries = (array) => {
  resultBlock.innerText = "";
  array.map((person) => {
    let entryDiv = document.createElement("div");
    let h2 = document.createElement("h2");
    let heighth3 = document.createElement("h3");
    let ageh3 = document.createElement("h3");
    let emailh3 = document.createElement("h3");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    h2.innerText = `${person.Id}) ${person.FirstName} ${person.LastName}`;
    heighth3.innerText = `Height: ${person.Height}`;
    ageh3.innerText = `Age: ${person.Age}`;
    emailh3.innerText = `Email: ${person.Email}`;
    entryDiv.appendChild(h2);
    entryDiv.appendChild(ul);
    li.appendChild(heighth3);
    li2.appendChild(ageh3);
    li3.appendChild(emailh3);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    resultBlock.appendChild(entryDiv);
  });
};

//SORT FUNCTIONALITY
let sortResults = async (category) => {
  let arr = await generatePeople();
  if (!descend) {
    switch (category) {
      case "ID":
        return arr;

      case "FN":
        return [...arr].sort((a, b) => {
          const valueA = a.FirstName;
          const valueB = b.FirstName;
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        });

      case "LN":
        return [...arr].sort((a, b) => {
          const valueA = a.LastName;
          const valueB = b.LastName;
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        });

      case "Age":
        return [...arr].sort((a, b) => {
          const valueA = a.Age;
          const valueB = b.Age;
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        });

      case "Height":
        return [...arr].sort((a, b) => {
          const valueA = a.Height;
          const valueB = b.Height;
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        });

      default:
        break;
    }
  } else {
    switch (category) {
      case "ID":
        return [...arr].sort((a, b) => {
          const valueA = a.Id;
          const valueB = b.Id;
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        });

      case "FN":
        return [...arr].sort((a, b) => {
          const valueA = a.FirstName;
          const valueB = b.FirstName;
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        });

      case "LN":
        return [...arr].sort((a, b) => {
          const valueA = a.LastName;
          const valueB = b.LastName;
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        });

      case "Age":
        return [...arr].sort((a, b) => {
          const valueA = a.Age;
          const valueB = b.Age;
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        });

      case "Height":
        return [...arr].sort((a, b) => {
          const valueA = a.Height;
          const valueB = b.Height;
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        });

      default:
        break;
    }
  }
};

//TOGGLE STYLING

let toggleSorts = (btn) => {
  for (let i = 0; i < sortBtns.length; i++) {
    sortBtns[i].style.backgroundColor = "white";
    sortBtns[i].style.color = "black";
  }
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
};
let toggleCount = (btn) => {
  for (let i = 0; i < sortBtns.length; i++) {
    displayBtns[i].style.backgroundColor = "white";
    displayBtns[i].style.color = "black";
  }
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
};
let toggleOrder = () => {
    if(descend)
    {
       BtnAscend.style.color = "black" 
       BtnAscend.style.backgroundColor = "white" 
       BtnDescend.style.color = "white" 
       BtnDescend.style.backgroundColor = "black" 
    }
    else{
        BtnDescend.style.color = "black" 
        BtnDescend.style.backgroundColor = "white" 
        BtnAscend.style.color = "white" 
        BtnAscend.style.backgroundColor = "black" 
    }
}
toggleOrder()

// EVENT LISTENERS

//PAGE COUNT BUTTONS
Btn10.addEventListener("click", () => {
  toggleCount(Btn10);
  count = 10;
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
Btn20.addEventListener("click", () => {
  toggleCount(Btn20);
  count = 20;
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
Btn30.addEventListener("click", () => {
  toggleCount(Btn30);
  count = 30;
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
Btn40.addEventListener("click", () => {
  toggleCount(Btn40);
  count = 40;
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
Btn50.addEventListener("click", () => {
  toggleCount(Btn50);
  count = 50;
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});

// SORT BUTTONS
BtnID.addEventListener("click", () => {
  toggleSorts(BtnID);
  category = "ID";
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
BtnFN.addEventListener("click", () => {
  toggleSorts(BtnFN);
  category = "FN";
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
BtnLN.addEventListener("click", () => {
  toggleSorts(BtnLN);
  category = "LN";
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
BtnH.addEventListener("click", () => {
  toggleSorts(BtnH);
  category = "Height";
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
BtnA.addEventListener("click", () => {
  toggleSorts(BtnA);
  category = "Age";
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});

// ORDER BTNS
BtnAscend.addEventListener("click", () => {
  descend = false;
  toggleOrder()
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});
BtnDescend.addEventListener("click", () => {
  descend = true;
  toggleOrder()
  console.log(
    `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
  );
  createEntries(category, count);
});

//ON LOAD
console.log(
  `Sorting by:${category}. Page Count:${count}. Descending:${descend}`
);
createEntries("ID", 10);
