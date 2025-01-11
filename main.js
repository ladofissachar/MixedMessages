function feeling(feeling){
    const quoteElement = document.querySelector('.quote');
    quoteElement.innerHTML = '';

    const randomIndex = randomQuote();
    const quote = getFeeling(feeling, randomIndex);
    
    quoteElement.innerHTML = `${quote}`;
}

function getFeeling(feeling, randomIndex){
    const quotes = {
        sad: [
            'The Lord is close to the brokenhearted and saves those who are crushed in spirit. <br><br> Psalm 34:18',
            'Come to me, all you who are weary and burdened, and I will give you rest. <br><br> Matthew 11:28',
            'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God. <br><br> 2 Corinthians 1:3-4',
        ],

        afraid: [
            'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. <br><br> Isaiah 41:10',
            'When I am afraid, I put my trust in you. In God, whose word I praise—in God I trust and am not afraid. What can mere mortals do to me? <br><br> Psalm 56:3-4',
            'For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline. <br><br> 2 Timothy 1:7',
        ],

        angery: [
            'In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold. <br><br> Ephesians 4:26-27',
            'A gentle answer turns away wrath, but a harsh word stirs up anger. <br><br> Proverbs 15:1',
            'My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires. <br><br> James 1:19-20',
        ]
    }

    return quotes[feeling][randomIndex];
}

function randomQuote(){
    const randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

