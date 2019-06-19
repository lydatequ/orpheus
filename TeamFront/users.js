// Logout
$('.logout').click(function () {
    confirm('You are about to logout! Are you sure you want to continue?');
    sessionStorage.clear();
});


let pianoBeg = document.querySelector(".pianoBeg"),
    pianoAdv = document.querySelector(".pianoAdv"),
    guitarBeg = document.querySelector(".guitarBeg"),
    guitarAdv = document.querySelector(".guitarAdv"),
    violinBeg = document.querySelector(".violinBeg"),
    violinAdv = document.querySelector(".violinAdv"),
    saxophoneBeg = document.querySelector(".saxophoneBeg"),
    saxophoneAdv = document.querySelector(".saxophoneAdv");

// Fake JSON data array === here should be API call
let courses = [
    {
        "id": 0,
        "name": "Piano_Basic_1",
        "instrument": "Piano",
        "level": "Beginners",
        "description": "Your description here. When I go forwards, you go backwards and somewhere we will meet.",
        "price": 799
    },
    {
        "id": 1,
        "name": "Piano_Basic_2",
        "instrument": "Piano",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 349
    },
    {
        "id": 2,
        "name": "Piano_Basic_3",
        "instrument": "Piano",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 1499
    },
    {
        "id": 3,
        "name": "Piano_Basic_4",
        "instrument": "Piano",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 999
    },
    {
        "id": 4,
        "name": "Piano_Pro_1",
        "instrument": "Piano",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 599
    },
    {
        "id": 5,
        "name": "Piano_Pro_2",
        "instrument": "Piano",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 6,
        "name": "Guitar_Basic_1",
        "instrument": "Guitar",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 7,
        "name": "Guitar_Basic_2",
        "instrument": "Guitar",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 8,
        "name": "Guitar_Basic_3",
        "instrument": "Guitar",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 9,
        "name": "Guitar_Pro_1",
        "instrument": "Guitar",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 10,
        "name": "Guitar_Pro_2",
        "instrument": "Guitar",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 11,
        "name": "Violin_Basic_1",
        "instrument": "Violin",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 12,
        "name": "Violin_Basic_2",
        "instrument": "Violin",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 13,
        "name": "Violin_Pro_1",
        "instrument": "Violin",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 14,
        "name": "Saxophone_Basic_1",
        "instrument": "Saxophone",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 15,
        "name": "Saxophone_Basic_2",
        "instrument": "Saxophone",
        "level": "Beginners",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    },
    {
        "id": 16,
        "name": "Saxophone_Pro_1",
        "instrument": "Saxophone",
        "level": "Advanced",
        "description": "Your description here. When i go forwards, you go backwards and somewhere we will meet.",
        "price": 499
    }
];


// Creates the courses in the document. (NOTE: template strings-ES6)
let generateCourseList = function () {
    courses.forEach(function (item) {
        let myCourse = document.createElement("div");
        myCourse.className = "course";
        myCourse.innerHTML = `
                             <div class="course-name"><h5><span>Course:</span> ${item.name}</h5></div>
                             
                             <div class="course-price"><h7> $${item.price} </h7></div>
                             <div class="course-add-to-cart">
                               <div href="#0" class="button see-more"><i class="fas fa-question-circle"></i></div>
                               <div href="#0" class="button add-to-cart" data-id=${item.id} data-name=${item.name} data-price=${item.price}>Add to Cart</div>
                             </div>
                          `;

        if (item.instrument === "Piano" && item.level === "Beginners") {
            pianoBeg.appendChild(myCourse);
        }
        if (item.instrument === "Piano" && item.level === "Advanced") {
            pianoAdv.appendChild(myCourse);
        }
        if (item.instrument === "Guitar" && item.level === "Beginners") {
            guitarBeg.appendChild(myCourse);
        }
        if (item.instrument === "Guitar" && item.level === "Advanced") {
            guitarAdv.appendChild(myCourse);
        }
        if (item.instrument === "Violin" && item.level === "Beginners") {
            violinBeg.appendChild(myCourse);
        }
        if (item.instrument === "Violin" && item.level === "Advanced") {
            violinAdv.appendChild(myCourse);
        }
        if (item.instrument === "Saxophone" && item.level === "Beginners") {
            saxophoneBeg.appendChild(myCourse);
        }
        if (item.instrument === "Saxophone" && item.level === "Advanced") {
            saxophoneAdv.appendChild(myCourse);
        }

    });
}

generateCourseList();


// Function for the shopping cart: 
let shoppingCart = (function () {

    // Private methods and propeties

    cart = [];

    // Constructor
    function Item(name, price, count, id) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
        // console.log(JSON.stringify(cart)[0]);
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        if ($('#itemCount').text() === 0) {
            $('#itemCount').css('display', 'none');
        }
        loadCart();
    }


    // Public methods and propeties

    let obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        let item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count for item
    obj.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        let totalCount = 0;
        for (let item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        let cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            // itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    return obj;
})();


// Triggers / Events

// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);

    $('#itemCount').text(shoppingCart.totalCount()).css('display', 'block');

    displayCart();
});

// Clear items
$('.empty-cart-btn').click(function () {
    shoppingCart.clearCart();
    $('#itemCount').css('display', 'none');
    displayCart();
});

function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    for (let i in cartArray) {
        output += "<tr>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>($" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<span class='item-count form-control' data-name='" + cartArray[i].name + "'>" + cartArray[i].count + "</span>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('#itemCount').html(shoppingCart.totalCount());
    $('.item-quantity').html(shoppingCart.totalCount());
}

// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    let name = $(this).data('name');
    let count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();

// Hide and Show Cart Items
$('.openCloseCart').click(function () {
    $('#shoppingCart').toggle();
    $('.cartopaque').toggle();
});




// For the Chat:

$(function () {
    // Define some elements from the DOM and methods
    let $form = $("#msgForm"),
        $newMsg = $form.find("input"),
        $sendBtn = $form.find("button"),
        $feed = $("#msgs"),
        _wait = ms => new Promise((r, j) => setTimeout(r, ms)), 
        _secs = (a, b) => Math.floor(Math.random() * (b - a)) + a;

    // Define our send method
    let _send = data => {
        // Send data to a new .msg
        let $msg = $('<div class="msg"></div>'),
            { sender, typing } = data;
        if (sender !== "me") {
            $msg.addClass("to");
        } else {
            $msg.addClass("from");
        }
        $msg.text(data.msg);
        if (typing) {
            $msg.addClass("typing");
        }
        $msg.appendTo($feed);
        // After sending, clear the text field.
        $newMsg.val("");
        // Simulate a reply from the other user.
        if (sender === "me") {
            setTimeout(_otherUserReply, 1000);
        }
        if (typing) {
            return $msg;
        } // ref to new DOM .msg
    };

    let items = ["Hallo", "Goodmorning", "Salut", "Ciao"];
    let random = items[Math.floor(Math.random() * items.length)];

    let _otherUserReply = () => {
        // After a few seconds, the agent starts to type a message.
        let waitAfew = _wait(_secs(3000, 5000)),
            showOtherUserTyping = async () => {
                console.log("agent is typing...");
                // Show that the other user is typing
                let $otherMsg = _send({ msg: "David is typing...", typing: true, sender: false });
                // In a few seconds show the typed message
                waitAfew.then(() => {
                    // Simulate actual typing by removing the typing message when the other user isn't typing, and before the other user sends the typed message.
                    $otherMsg.text(random);
                    $otherMsg.removeClass("typing");
                });

            };
        waitAfew.then(showOtherUserTyping());
    };

    // Define event handlers: Hitting Enter or clicking Send will send the input.
    $newMsg.on("keypress", function (e) {
        if (e.which === 13) {
            e.stopPropagation(); e.preventDefault();
            let envelope = {
                msg: $newMsg.val(),
                sender: "me"
            }
            return _send(envelope);
        } else {
          
        }
    });
    $sendBtn.on("click", function (e) {
        e.stopPropagation(); e.preventDefault();
        let envelope = {
            msg: $newMsg.val(),
            sender: "me"
        }
        return _send(envelope);
    });
});

