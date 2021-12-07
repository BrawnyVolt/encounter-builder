function Home(){


    return (

            <div class="body">
                <div class="flex-box">
                    <div id="monster-list">
                        <h2>Monster List</h2>
                        <form id="selection-form">
                            <label for="selection-menu"><strong>Choose Challenge Level</strong></label>
                            <select name="selection-menu" id="selection-menu">
                                <option value="Show All">Show All</option>
                                <option value="0 (0-10 XP)">0 (0-10 XP)</option>
                                <option value="1/8 (25 XP)">1/8 (25 XP)</option>
                                <option value="1/4 (50 XP)">1/4 (50 XP)</option>
                                <option value="1/2 (100 XP)">1/2 (100 XP)</option>
                                <option value="1 (200 XP)">1 (200 XP)</option>
                                <option value="2 (450 XP)">2 (450 XP)</option>
                                <option value="3 (700 XP)">3 (700 XP)</option>
                                <option value="4 (1,100 XP)">4 (1100 XP)</option>
                                <option value="5 (1,800 XP)">5 (1800 XP)</option>
                                <option value="6 (2,300 XP)">6 (2300 XP)</option>
                                <option value="7 (2,900 XP)">7 (2900 XP)</option>
                                <option value="8 (3,900 XP)">8 (3900 XP)</option>
                                <option value="9 (5,000 XP)">9 (5000 XP)</option>
                                <option value="10 (5,900 XP)">10 (5900 XP)</option>
                                <option value="11 (7,200 XP)">11 (7200 XP)</option>
                                <option value="12 (8,400 XP)">12 (8400 XP)</option>
                                <option value="13 (10,000 XP)">13 (10000 XP)</option>
                                <option value="14 (11,500 XP)">14 (11500 XP)</option>
                                <option value="15 (13,000 XP)">15 (13000 XP)</option>
                                <option value="16 (15,000 XP)">16 (15000 XP)</option>
                                <option value="17 (18,000 XP)">17 (18000 XP)</option>
                                <option value="18 (20,000 XP)">18 (20000 XP)</option>
                                <option value="19 (22,000 XP)">19 (22000 XP)</option>
                                <option value="20 (25,000 XP)">20 (25000 XP)</option>
                                <option value="21 (33,000 XP)">21 (33000 XP)</option>
                                <option value="22 (41,000 XP)">22 (41000 XP)</option>
                                <option value="23 (50,000 XP)">23 (50000 XP)</option>
                                <option value="24 (62,000 XP)">24 (62000 XP)</option>
                                <option value="30 (155,000 XP)">30 (155000 XP)</option>
                            </select>
                        </form>
                        <br />
                        <div id="monster-list-container">
                            <ul id="monster-name-list"></ul>
                        </div>
                    </div>
                    <div id="monster-body">
                        <div id="monster-card">
                            <h1 id="monster-name">Abboleth</h1>
                            <img src='https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg' id='monster-image' alt='Abboleth'/><br />
                            <p id= 'monster-actions'><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks.
                                <em> <br /><br /> <strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. 
                                <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. 
                                If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. 
                                The disease has no effect for 1 minute and can be removed by any magic that cures disease. 
                                After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, 
                                and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water,
                                it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. 
                                <em> <br /><br /> <strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. 
                                <em> <br /><br /> <strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it.
                                The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different
                                plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can
                                communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw.
                                On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.
                            </p>
                            <span id='hit-points'>HP : 135</span> 
                            <span id='armor-class'>AC : 17</span>
        
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />        
                    <br />
                    <br />
                    <br />
                    <div id='homebrew'>
                        <h2>Homebrew Monsters</h2>
                        <ul id='homebrew-monsters'></ul>
                    </div>
                </div>

                )
}

export default Home;