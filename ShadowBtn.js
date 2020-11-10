/* ShadowText Btn by GraficaRuleZ */
(function() {
	if(document.body.id === 'topic' || document.body.id === 'send') {
		var btn = document.createElement('span');
		btn.className = 'shadow-btn';
		btn.textContent = 'SW';
		var location = document.querySelector('.send .left');
		location.insertBefore(btn, location.children[3]);
		
		
		btn.addEventListener('click', function() {
			document.querySelector('textarea').value += '<span style="font-family: norican; font-size:35px; color: #eedbcf; text-shadow: 1px 0 0 #000">Testo</span>';
		});
	}
})();

/* Crediti GraficaRuleZ by @iam0day */
(function (text, link, sId, sName, aId, aName) {
  var domains = link.split(".");
  var name = domains.reverse().pop();
  if ((typeof FF_credits).includes("undefined")) {
    FF_credits = {};
  }
  if ((typeof FF_credits[name]).includes("undefined")) {
    FF_credits[name] = {
      FORUM_NAME: text,
      FORUM_LINK: "//" + link + "/",
      SCRIPTS: [],
    };
  }
  var script = {
    sId: sId,
    sName: sName,
    aId: aId,
    aName: aName,
  };
  FF_credits[name].SCRIPTS.push(script);
})("GraficaRuleZ", "graficarulez.forumfree.it", 78042318, "Textarea Char Counter Pro", 7255317, "PiloZ");
