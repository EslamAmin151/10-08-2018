let container = document.getElementById("container")

let header = document.createElement("div")
header.className = "header"
container.appendChild(header)

let h2header = document.createElement("h2")
header.appendChild(h2header)
h2header.innerHTML = "HighOnCoding"

let menu = document.createElement("ui")
header.appendChild(menu)

let liitem1 = document.createElement("li")
menu.appendChild(liitem1)
liitem1.innerHTML = "Home"

let liitem2 = document.createElement("li")
menu.appendChild(liitem2)
liitem2.innerHTML = "Categories"

let article = document.createElement("div")
article.className = "articlecontent"
container.appendChild(article)

let label = document.createElement("h3")
article.appendChild(label)
label.innerHTML = "Curse of the Current Reviews"

let content = document.createElement("p")
label.appendChild(content)
content.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."

let article2 = document.createElement("div")
article2.className = "article22"
container.appendChild(article2)

let welcome = document.createElement("h3")
article2.appendChild(welcome)
welcome.innerHTML ="Hello WatchKit"

let concept = document.createElement("p")
article2.appendChild(concept)
concept.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

let peopleReaction = document.createElement("ui")
peopleReaction.className = "notification"
container.appendChild(peopleReaction)

let notificationcomment = document.createElement("li")
peopleReaction.append(notificationcomment)
notificationcomment.innerHTML = "12 Comments"

let notificationlike = document.createElement("li")
peopleReaction.append(notificationlike)
notificationlike.innerHTML = "124 like"

let article3 = document.createElement("div")
article3.className = "article23"
container.appendChild(article3)

let welcome1 = document.createElement("h3")
article3.appendChild(welcome1)
welcome1.innerHTML ="Introduction to Swift"

let concept1 = document.createElement("p")
article3.appendChild(concept1)
concept1.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."

let peopleReaction2 = document.createElement("ui")
peopleReaction2.className = "notification1"
container.appendChild(peopleReaction2)

let notificationcomment2 = document.createElement("li")
peopleReaction2.append(notificationcomment2)
notificationcomment2.innerHTML = "15 Comments"

let notificationlike2 = document.createElement("li")
peopleReaction2.append(notificationlike2)
notificationlike2.innerHTML = "45 like"
