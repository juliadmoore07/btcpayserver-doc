(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{612:function(e,t,a){e.exports=a.p+"assets/img/batch-payouts.75d71d03.jpg"},826:function(e,t,a){"use strict";a.r(t);var s=a(35),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"payouts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payouts"}},[e._v("#")]),e._v(" Payouts")]),e._v(" "),s("p",[e._v("The payout functionality is tied into the "),s("RouterLink",{attrs:{to:"/PullPayments/"}},[e._v("Pull Payments")]),e._v(". This feature allows y ou to create payouts within your BTCPay.\nThis feature allows you to process pull payment (refunds, salary payouts, or withdrawals).")],1),e._v(" "),s("h2",{attrs:{id:"how-does-it-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),s("p",[e._v("We will go through two examples, one will be a Refund, and the other will be a salary payout.")]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("Let's start with the refund example.\nThe customer has bought an item in your store but sadly has to return the item. They want a refund.\nWithin BTCPay, you can create a "),s("RouterLink",{attrs:{to:"/Refund/"}},[e._v("Refund")]),e._v(" and provide the customer with the link to claim their funds.\nWhenever the customer has given their address and claimed the funds, it will be shown in the "),s("code",[e._v("Payouts")]),e._v(".")],1),e._v(" "),s("p",[e._v("The first status it has is "),s("code",[e._v("Awaiting Approval")]),e._v(".\nStore clerks can check if multiple ones are waiting, and after making the selection, you use the "),s("code",[e._v("Actions")]),e._v(" button.")]),e._v(" "),s("p",[e._v("Options on the action button")]),e._v(" "),s("ul",[s("li",[e._v("Approve selected payouts")]),e._v(" "),s("li",[e._v("Approve & send selected payouts")]),e._v(" "),s("li",[e._v("Cancel selected payouts")])]),e._v(" "),s("p",[e._v("The next step is to "),s("code",[e._v("Approve & send selected payouts")]),e._v(" as we want to refund the customer.\nCheck the Customer's Address, shows the amount and if we want fees to be subtracted from the refund or not.\nOnce you've done the checks, only signing the transaction is left.")]),e._v(" "),s("p",[e._v("The customer now gets updated on the Claiming page. He can follow the transaction as he's provided with a link to a block explorer and his transaction.\nOnce the transaction has been confirmed, and the status changes to Completed.")]),e._v(" "),s("p",[e._v("Now let's get into Salary payout, as this is driven from inside the store and not per the Customer's request.\nThe underlying is the same; it uses the Pull payments. But instead of creating a refund, we will make a "),s("RouterLink",{attrs:{to:"/PullPayments/"}},[e._v("Pull Payment")]),e._v(".")],1),e._v(" "),s("p",[e._v("Goto the "),s("code",[e._v("Pull Payments")]),e._v(" tab in your BTCPay server.\nIn the top right, click the "),s("code",[e._v("Create Pull Payment")]),e._v(" Button.")]),e._v(" "),s("p",[e._v("Now we are in the creation of the Payout, give it a name and the desired amount in desired currency, fill out the Description, so the employee knows what it's about.\nThe next portion is similar to refunds. The employee fills out the Destination address and the amount he wants to claim from this Payout. He might decide to make it 2 separate claims, to different addresses, or even partly claim over lightning.")]),e._v(" "),s("p",[e._v("If there are multiple waiting Payouts, you can batch these to be signed and sent out. Once signed, the payouts move to the "),s("code",[e._v("In progress")]),e._v(" tab and show the Transaction.\nWhen accepted by the network, the payout moves to the Completed tab.\nThe completed tab is purely for historical purposes. It holds the processed Payouts and the transaction that belongs to it.")]),e._v(" "),s("figure",[s("img",{attrs:{src:a(612),alt:"BTCPay Server Payouts tab",title:"BTCPay Server refund feature"}})]),e._v(" "),s("h1",{attrs:{id:"using-greenfield-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-greenfield-api"}},[e._v("#")]),e._v(" Using Greenfield API")]),e._v(" "),s("p",[e._v("As described in the "),s("RouterLink",{attrs:{to:"/PullPayments/#greenfield-api"}},[e._v("Pull Payments")]),e._v(" Greenfield API allows for broader use of "),s("code",[e._v("Pull Payments")]),e._v(".\nThe payout request will always go to the Payouts tab in your BTCPay server whenever the concept is used.\nBy using the Greenfield API you could automate these requests, a future release of BTCPay server presumably will have automation options for payouts.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);