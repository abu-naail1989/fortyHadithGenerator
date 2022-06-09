const ahadith = [
  `Actions are by intentions
HADITH 1
It is narrated on the authority of Amir al-Mu'minin (Leader of the Believers), Abu Hafs 'Umar bin al-Khattab (may Allah be pleased with him), who said: I heard the Messenger of Allah (peace be upon him), say

"Actions are according to intentions, and everyone will get what was intended. Whoever migrates with an intention for Allah and His messenger, the migration will be for the sake of Allah and his Messenger. And whoever migrates for worldly gain or to marry a woman, then his migration will be for the sake of whatever he migrated for."

Related by Bukhari & Muslim`,
  `Islam, Iman, Ihsan
HADITH 2
It was narrated on the authority of Umar (may Allah be pleased with him), who said:

While we were one day sitting with the Messenger of Allah (peace be upon him), there appeared before us a man dressed in extremely white clothes and with very black hair. No traces of journeying were visible on him, and none of us knew him. He sat down close by the Prophet (peace be upon him), rested his knee against his thighs, and said, "O Muhammad! Inform me about Islam."

The Messenger of Allah (peace be upon him) said, "Islam is that you should testify that there is no deity except Allah and that Muhammad is His Messenger, that you should perform salah, pay the Zakah, fast during Ramadan, and perform Hajj to the House, if you are able to do so."

The man said, "You have spoken truly." We were astonished at his questioning him (the Messenger) and telling him that he was right, but he went on to say, "Inform me about iman."

He (the Messenger of Allah) answered, "It is that you believe in Allah and His angels and His Books and His Messengers and in the Last Day, and in qadar (fate), both in its good and in its evil aspects." He said, "You have spoken truly."

Then he (the man) said, "Inform me about Ihsan." He (the Messenger of Allah) answered, "It is that you should serve Allah as though you could see Him, for though you cannot see Him yet (know that) He sees you."

He said, "Inform me about the Hour." He (the Messenger of Allah) said, "About that, the one questioned knows no more than the questioner." So he said, "Well, inform me about the signs thereof." He said, "They are that the slave-girl will give birth to her mistress, that you will see the barefooted, naked, destitute, the herdsmen of the sheep (competing with each other) in raising lofty buildings." Thereupon the man went of. I waited a while, and then he (the Messenger of Allah) said, "O Umar, do you know who that questioner was?" I replied, "Allah and His Messenger know better." He said, "That was Jibril (the Angel Gabriel). He came to teach you your religion."

[Muslim]`,
  `Islam is Built Upon Five
HADITH 3
On the authority of Abdullah ibn Umar ibn Al-Khattab (may Allah be pleased with him) who said: I heard the Messenger of Allah (peace be upon him) say:

Islam has been built on five [pillars]: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, performing the prayers, paying the Zakah, making the pilgrimage to the House, and fasting in Ramadan.

[Bukhari & Muslim]`,
  `Deeds are by Their Final Actions
HADITH 4
On the authority of Abdullah ibn Masud (may Allah be pleased with him), who said: The Messenger of Allah (peace be upon him), and he is the truthful and the believed, narrated to us:

Verily the creation of each one of you is brought together in his mother's womb for forty days in the form of a drop, then he becomes a clot of blood for a like period, then a morsel of flesh for a like period, then there is sent to him the angel who blows the breath of life into him and who is commanded with four matters: to write down his sustenance, his life span, his actions, and whether he will be happy or unhappy (whether or not he will enter Paradise).

By Allah, other than Whom there is no deity, verily one of you performs the actions of the people of Paradise until there is but an arm's length between him and it, and that which has been written overtakes him, and so he acts with the actions of the people of the Hellfire and thus enters it; and verily one of you performs the actions of the people of the Hellfire, until there is but an arm's length between him and it, and that which has been written overtakes him and so he acts with the actions of the people of Paradise and thus he enters it.

[Bukhari and Muslim]`,
  `Rejection of Evil Deeds and Innovations
HADITH 5
On the authority of the mother of the faithful, 'Aisha (may Allah be pleased with her), who said: The Messenger of Allah (peace be upon him) said:

He who innovates something in this matter of ours [Islam] that is not of it will have it rejected [by Allah].

[Bukhari & Muslim]

In one version by Muslim it reads:

He who does an act which we have not commanded, will have it rejected [by Allah].`,
];

const form = document.querySelector(".lorem-form");
const result = document.querySelector(".lorem-text");
const amount = document.getElementById("amount");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = amount.value;
  const random = Math.floor(Math.random() * ahadith.length);

  if (isNaN(value) || value <= 0 || value > 4) {
    result.innerHTML = `<p class="result">${ahadith[random]}</p>`;
  } else {
    let tempText = ahadith.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
