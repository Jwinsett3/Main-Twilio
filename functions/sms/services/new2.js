const text = `1:1 Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.
 
1:2 But his delight is in the law of the LORD; and in his law doth he meditate day and night.
 
1:3 And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.
 
1:4 The ungodly are not so: but are like the chaff which the wind driveth away.
 
1:5 Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.
 
1:6 For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.
 
2:1 Why do the heathen rage, and the people imagine a vain thing?
 
2:2 The kings of the earth set themselves, and the rulers take counsel together, against the LORD, and against his anointed, saying,
 
2:3 Let us break their bands asunder, and cast away their cords from us.
 
2:4 He that sitteth in the heavens shall laugh: the LORD shall have them in derision.
 
2:5 Then shall he speak unto them in his wrath, and vex them in his sore displeasure.
 
2:6 Yet have I set my king upon my holy hill of Zion.
 
2:7 I will declare the decree: the LORD hath said unto me, Thou art my Son; this day have I begotten thee.
 
2:8 Ask of me, and I shall give thee the heathen for thine inheritance, and the uttermost parts of the earth for thy possession.
 
2:9 Thou shalt break them with a rod of iron; thou shalt dash them in pieces like a potter’s vessel.
 
2:10 Be wise now therefore, O ye kings: be instructed, ye judges of the earth.
 
2:11 Serve the LORD with fear, and rejoice with trembling.
 
2:12 Kiss the Son, lest he be angry, and ye perish from the way, when his wrath is kindled but a little. Blessed are all they that put their trust in him.
 
3:1 Lord, how are they increased that trouble me! many are they that rise up against me.
 
3:2 Many there be which say of my soul, There is no help for him in God. Selah.
 
3:3 But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head.
 
3:4 I cried unto the LORD with my voice, and he heard me out of his holy hill. Selah.
 
3:5 I laid me down and slept; I awaked; for the LORD sustained me.
 
3:6 I will not be afraid of ten thousands of people, that have set themselves against me round about.
 
3:7 Arise, O LORD; save me, O my God: for thou hast smitten all mine enemies upon the cheek bone; thou hast broken the teeth of the ungodly.
 
3:8 Salvation belongeth unto the LORD: thy blessing is upon thy people. Selah.
 
4:1 Hear me when I call, O God of my righteousness: thou hast enlarged me when I was in distress; have mercy upon me, and hear my prayer.
 
4:2 O ye sons of men, how long will ye turn my glory into shame? how long will ye love vanity, and seek after leasing? Selah.
 
4:3 But know that the LORD hath set apart him that is godly for himself: the LORD will hear when I call unto him.`;
 
// Function to parse verses
function parseVerses(text) {
  const verses = text.split(/\n\n+/);
  const chapterVerseMap = {};
 
  verses.forEach(verse => {
    const [verseID, ...verseText] = verse.split(' ');
    const [chapter, verseNumber] = verseID.split(':');
    if (!chapterVerseMap[chapter]) {
      chapterVerseMap[chapter] = [];
    }
    chapterVerseMap[chapter].push(verseID + ' ' + verseText.join(' '));
  });
 
  return chapterVerseMap;
}
 
const parsedVerses = parseVerses(text);
console.log(parsedVerses);
 
// Function to retrieve a specific verse given a chapter and verse number
function getVerse(chapter, verseNumber, versesMap) {
    const chapterVerses = versesMap[chapter];
    if (!chapterVerses) {
        return "Chapter not found.";
    }
    const verse = chapterVerses.find(v => v.startsWith(`${chapter}:${verseNumber} `));
    return verse || "Verse not found.";
}
 
// Example usage
const verse = getVerse("2", "9", parsedVerses); // Get verse 2:6
console.log(verse); // Logs the text of verse 2:6
 
const verse2 = getVerse("1", "3", parsedVerses); // Get verse 1:3
console.log(verse2); // Logs the text of verse 1:3
 