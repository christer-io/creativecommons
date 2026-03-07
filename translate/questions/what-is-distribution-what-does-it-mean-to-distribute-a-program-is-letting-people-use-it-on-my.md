---
id: "67095633-a3e2-4326-b408-5b84bbb3b98c"
title: "What is \"distribution\"? What does it mean to \"distribute\" a program? Is letting people use it on my server the same as distribution?"
description: ""
slug: "what-is-distribution-what-does-it-mean-to-distribute-a-program-is-letting-people-use-it-on-my"
posttype: ["faq"]
tag: "opensource"
featured: ""
source: "Open Source Initiative"
license: "CC-BY-4.0"
---

# What is "distribution"? What does it mean to "distribute" a program? Is letting people use it on my server the same as distribution?

Colloquially, to "distribute" a program means to give someone else a copy of its code — either its source code, or its binary (executable) code, or both. Merely allowing people to invoke a program on your server, for example via networked API calls, does not constitute distribution of the program as generally understood.

To avoid confusion, some licenses use the terms "propagate" and "convey" instead of "distribute". For example, in the GNU General Public License, version 3, to "propagate" means "...to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well." Even that leaves some question as to what "making available to the public" means. The definition for "convey" narrows it down, however: "...any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying."

In a legal context, you may wish to use similar precision. However, in informal communications, "distribute" is usually understood to mean "deliver copies in source code and/or binary form".

Not all programs have separate source and binary forms. For programs written in so-called "scripting" languages there is generally only a source code form (though sometimes compressed, for example via the minification often performed on Javascript code prior to distribution). But other programming languages are typically compiled to an architecture-specific executable form and can optionally be distributed as executables without source code. The distinction between source code and executable form is important for understanding the terms and conditions of some open source licenses, so if you don't have the necessary technical background, you should consult someone who does.
