function MonsterBar(){

  // let target = document.querySelector("#insert-here")
  // function addNewMonsterRow(){
  //   console.log("hit")
  //   let target = document.querySelector("#insert-here");
  //   let cln = target.previousSibling.cloneNode(true);
  //   target.appendChild(cln);
  //   target.prepend
  // }
  let lastButton = ""
//   function deleteButtonClick(){
//     lastButton.previousSibling.remove;
//     lastButton.remove;
// }


  function addNewMonsterRow() {
    // grabbing the div the select bar lives in, for cloning. It looks like we're also grabbing the div and cloning it too :\
    let copiedNodeLocation = document.getElementById("copy-target");
    // //cloning
    let clonedNode = copiedNodeLocation.cloneNode(true);
    // //gotta put the clone somewhere, we gonna put it after an empty div
    document.getElementById("insert-here").append(clonedNode);
    // //now delete the button that comes with it.
    let plusButtons = document.querySelectorAll('.button-bby');
    let lastButton = plusButtons[plusButtons.length-1];
    lastButton.innerText="x";
    lastButton.onclick = lastButton.remove;


    //jogo code
    // let allCopyTargets = document.querySelectorAll("#copy-target");
    // let lastTarget = allCopyTargets[allCopyTargets.length-1];
    // console.log(lastTarget);


    // lastButton.onclick = lastTarget.remove(); 
    // lastButton.onclick = lastButton.remove; 
    //this will delete the new "+" button as the clone is made, i'm commenting it out for now to try an get a "-" button working
    // lastButton.remove();


  }
  

  
    return (
      <div>
        <div id="copy-target">
          <div>
            <select className="monster-bar">
              <option value="1">Aboleth</option>
              <option value="2">Acolyte</option>
              <option value="3">Adult Black Dragon</option>
              <option value="4">Adult Blue Dragon</option>
              <option value="5">Adult Brass Dragon</option>
              <option value="6">Adult Bronze Dragon</option>
              <option value="7">Adult Copper Dragon</option>
              <option value="8">Adult Gold Dragon</option>
              <option value="9">Adult Green Dragon</option>
              <option value="10">Adult Red Dragon</option>
              <option value="11">Adult Silver Dragon</option>
              <option value="12">Adult White Dragon</option>
              <option value="13">Air Elemental</option>
              <option value="14">Allosaurus</option>
              <option value="15">Ancient Black Dragon</option>
              <option value="16">Ancient Blue Dragon</option>
              <option value="17">Ancient Brass Dragon</option>
              <option value="18">Ancient Bronze Dragon</option>
              <option value="19">Ancient Copper Dragon</option>
              <option value="20">Ancient Gold Dragon</option>
              <option value="21">Ancient Green Dragon</option>
              <option value="22">Ancient Red Dragon</option>
              <option value="23">Ancient Silver Dragon</option>
              <option value="24">Ancient White Dragon</option>
              <option value="25">Androsphinx</option>
              <option value="26">Animated Armor</option>
              <option value="27">Ankheg</option>
              <option value="28">Ankylosaurus</option>
              <option value="29">Ape</option>
              <option value="30">Archmage</option>
              <option value="31">Assassin</option>
              <option value="32">Awakened Shrub</option>
              <option value="33">Awakened Tree</option>
              <option value="34">Axe Beak</option>
              <option value="35">Azer</option>
              <option value="36">Baboon</option>
              <option value="37">Badger</option>
              <option value="38">Balor</option>
              <option value="39">Bandit</option>
              <option value="40">Bandit Captain</option>
              <option value="41">Banshee</option>
              <option value="42">Barbed Devil</option>
              <option value="43">Basilisk</option>
              <option value="44">Bat</option>
              <option value="45">Bearded Devil</option>
              <option value="46">Behir</option>
              <option value="47">Berserker</option>
              <option value="48">Black Bear</option>
              <option value="49">Black Dragon Wyrmling</option>
              <option value="50">Black Pudding</option>
              <option value="51">Blink Dog</option>
              <option value="52">Blood Hawk</option>
              <option value="53">Blue Dragon Wyrmling</option>
              <option value="54">Boar</option>
              <option value="55">Bone Devil</option>
              <option value="56">Brass Dragon Wyrmling</option>
              <option value="57">Bronze Dragon Wyrmling</option>
              <option value="58">Brown Bear</option>
              <option value="59">Bugbear</option>
              <option value="60">Bulette</option>
              <option value="61">Camel</option>
              <option value="62">Cat</option>
              <option value="63">Centaur</option>
              <option value="64">Chain Devil</option>
              <option value="65">Chimera</option>
              <option value="66">Chuul</option>
              <option value="67">Clay Golem</option>
              <option value="68">Cloaker</option>
              <option value="69">Cloud Giant</option>
              <option value="70">Cockatrice</option>
              <option value="71">Commoner</option>
              <option value="72">Constrictor Snake</option>
              <option value="73">Copper Dragon Wyrmling</option>
              <option value="74">Couatl</option>
              <option value="75">Crab</option>
              <option value="76">Crocodile</option>
              <option value="77">Cult Fanatic</option>
              <option value="78">Cultist</option>
              <option value="79">Cyclops</option>
              <option value="80">Darkmantle</option>
              <option value="81">Death Dog</option>
              <option value="82">Deep Gnome (Svirfneblin)</option>
              <option value="83">Deer</option>
              <option value="84">Deva</option>
              <option value="85">Dire Wolf</option>
              <option value="86">Djinni</option>
              <option value="87">Doppelganger</option>
              <option value="88">Draft Horse</option>
              <option value="89">Dragon Turtle</option>
              <option value="90">Dretch</option>
              <option value="91">Drider</option>
              <option value="92">Drow</option>
              <option value="93">Druid</option>
              <option value="94">Dryad</option>
              <option value="95">Duergar</option>
              <option value="96">Dust Mephit</option>
              <option value="97">Eagle</option>
              <option value="98">Earth Elemental</option>
              <option value="99">Efreeti</option>
              <option value="100">Elephant</option>
              <option value="101">Elk</option>
              <option value="102">Erinyes</option>
              <option value="103">Ettercap</option>
              <option value="104">Ettin</option>
              <option value="105">Fire Elemental</option>
              <option value="106">Fire Giant</option>
              <option value="107">Flameskull</option>
              <option value="108">Flesh Golem</option>
              <option value="109">Flying Snake</option>
              <option value="110">Flying Sword</option>
              <option value="111">Frog</option>
              <option value="112">Frost Giant</option>
              <option value="113">Gargoyle</option>
              <option value="114">Gelatinous Cube</option>
              <option value="115">Ghast</option>
              <option value="116">Ghost</option>
              <option value="117">Ghoul</option>
              <option value="118">Giant Ape</option>
              <option value="119">Giant Badger</option>
              <option value="120">Giant Bat</option>
              <option value="121">Giant Boar</option>
              <option value="122">Giant Centipede</option>
              <option value="123">Giant Constrictor Snake</option>
              <option value="124">Giant Crab</option>
              <option value="125">Giant Crocodile</option>
              <option value="126">Giant Eagle</option>
              <option value="127">Giant Elk</option>
              <option value="128">Giant Fire Beetle</option>
              <option value="129">Giant Frog</option>
              <option value="130">Giant Goat</option>
              <option value="131">Giant Hyena</option>
              <option value="132">Giant Lizard</option>
              <option value="133">Giant Octopus</option>
              <option value="134">Giant Owl</option>
              <option value="135">Giant Poisonous Snake</option>
              <option value="136">Giant Rat</option>
              <option value="137">Giant Scorpion</option>
              <option value="138">Giant Sea Horse</option>
              <option value="139">Giant Shark</option>
              <option value="140">Giant Spider</option>
              <option value="141">Giant Toad</option>
              <option value="142">Giant Vulture</option>
              <option value="143">Giant Wasp</option>
              <option value="144">Giant Weasel</option>
              <option value="145">Giant Wolf Spider</option>
              <option value="146">Gibbering Mouther</option>
              <option value="147">Glabrezu</option>
              <option value="148">Gladiator</option>
              <option value="149">Gnoll</option>
              <option value="150">Goat</option>
              <option value="151">Goblin</option>
              <option value="152">Gold Dragon Wyrmling</option>
              <option value="153">Gorgon</option>
              <option value="154">Gray Ooze</option>
              <option value="155">Green Dragon Wyrmling</option>
              <option value="156">Green Hag</option>
              <option value="157">Grick</option>
              <option value="158">Griffon</option>
              <option value="159">Grimlock</option>
              <option value="160">Guard</option>
              <option value="161">Guardian Naga</option>
              <option value="162">Gynosphinx</option>
              <option value="163">Half-Red Dragon Veteran</option>
              <option value="164">Harpy</option>
              <option value="165">Hawk</option>
              <option value="166">Hell Hound</option>
              <option value="167">Hezrou</option>
              <option value="168">Hill Giant</option>
              <option value="169">Hippogriff</option>
              <option value="170">Hobgoblin</option>
              <option value="171">Homunculus</option>
              <option value="172">Horned Devil</option>
              <option value="173">Hunter Shark</option>
              <option value="174">Hydra</option>
              <option value="175">Hyena</option>
              <option value="176">Ice Devil</option>
              <option value="177">Ice Mephit</option>
              <option value="178">Imp</option>
              <option value="179">Invisible Stalker</option>
              <option value="180">Iron Golem</option>
              <option value="181">Jackal</option>
              <option value="182">Killer Whale</option>
              <option value="183">Knight</option>
              <option value="184">Kobold</option>
              <option value="185">Kraken</option>
              <option value="186">Lamia</option>
              <option value="187">Lemure</option>
              <option value="188">Lich</option>
              <option value="189">Lion</option>
              <option value="190">Lizard</option>
              <option value="191">Lizardfolk</option>
              <option value="192">Mage</option>
              <option value="193">Magma Mephit</option>
              <option value="194">Magmin</option>
              <option value="195">Mammoth</option>
              <option value="196">Manticore</option>
              <option value="197">Marilith</option>
              <option value="198">Mastiff</option>
              <option value="199">Medusa</option>
              <option value="200">Merfolk</option>
              <option value="201">Merrow</option>
              <option value="202">Mimic</option>
              <option value="203">Minotaur</option>
              <option value="204">Minotaur Skeleton</option>
              <option value="205">Mule</option>
              <option value="206">Mummy</option>
              <option value="207">Mummy Lord</option>
              <option value="208">Nalfeshnee</option>
              <option value="209">Night Hag</option>
              <option value="210">Nightmare</option>
              <option value="211">Noble</option>
              <option value="212">Nothic</option>
              <option value="213">Ochre Jelly</option>
              <option value="214">Octopus</option>
              <option value="215">Ogre</option>
              <option value="216">Ogre Zombie</option>
              <option value="217">Oni</option>
              <option value="218">Orc</option>
              <option value="219">Otyugh</option>
              <option value="220">Owl</option>
              <option value="221">Owlbear</option>
              <option value="222">Panther</option>
              <option value="223">Pegasus</option>
              <option value="224">Phase Spider</option>
              <option value="225">Pit Fiend</option>
              <option value="226">Planetar</option>
              <option value="227">Plesiosaurus</option>
              <option value="228">Poisonous Snake</option>
              <option value="229">Polar Bear</option>
              <option value="230">Pony</option>
              <option value="231">Priest</option>
              <option value="232">Pseudodragon</option>
              <option value="233">Pteranodon</option>
              <option value="234">Purple Worm</option>
              <option value="235">Quasit</option>
              <option value="236">Quipper</option>
              <option value="237">Rakshasa</option>
              <option value="238">Rat</option>
              <option value="239">Raven</option>
              <option value="240">Red Dragon Wyrmling</option>
              <option value="241">Reef Shark</option>
              <option value="242">Remorhaz</option>
              <option value="243">Rhinoceros</option>
              <option value="244">Riding Horse</option>
              <option value="245">Roc</option>
              <option value="246">Roper</option>
              <option value="247">Rug of Smothering</option>
              <option value="248">Rust Monster</option>
              <option value="249">Saber-Toothed Tiger</option>
              <option value="250">Sahuagin</option>
              <option value="251">Salamander</option>
              <option value="252">Satyr</option>
              <option value="253">Scorpion</option>
              <option value="254">Scout</option>
              <option value="255">Sea Hag</option>
              <option value="256">Sea Horse</option>
              <option value="257">Shadow</option>
              <option value="258">Shambling Mound</option>
              <option value="259">Shield Guardian</option>
              <option value="260">Shrieker</option>
              <option value="261">Silver Dragon Wyrmling</option>
              <option value="262">Skeleton</option>
              <option value="263">Solar</option>
              <option value="264">Spectator</option>
              <option value="265">Specter</option>
              <option value="266">Spider</option>
              <option value="267">Spirit Naga</option>
              <option value="268">Sprite</option>
              <option value="269">Spy</option>
              <option value="270">Steam Mephit</option>
              <option value="271">Stirge</option>
              <option value="272">Stone Giant</option>
              <option value="273">Stone Golem</option>
              <option value="274">Storm Giant</option>
              <option value="275">Succubus/Incubus</option>
              <option value="276">Swarm of Bats</option>
              <option value="277">Swarm of Insects</option>
              <option value="278">Swarm of Poisonous Snakes</option>
              <option value="279">Swarm of Quippers</option>
              <option value="280">Swarm of Rats</option>
              <option value="281">Swarm of Ravens</option>
              <option value="282">Tarrasque</option>
              <option value="283">Thug</option>
              <option value="284">Tiger</option>
              <option value="285">Treant</option>
              <option value="286">Tribal Warrior</option>
              <option value="287">Triceratops</option>
              <option value="288">Troll</option>
              <option value="289">Twig Blight</option>
              <option value="290">Tyrannosaurus Rex</option>
              <option value="291">Unicorn</option>
              <option value="292">Vampire</option>
              <option value="293">Vampire Spawn</option>
              <option value="294">Veteran</option>
              <option value="295">Violet Fungus</option>
              <option value="296">Vrock</option>
              <option value="297">Vulture</option>
              <option value="298">Warhorse</option>
              <option value="299">Warhorse Skeleton</option>
              <option value="300">Water Elemental</option>
              <option value="301">Weasel</option>
              <option value="302">Werebear</option>
              <option value="303">Wereboar</option>
              <option value="304">Wererat</option>
              <option value="305">Weretiger</option>
              <option value="306">Werewolf</option>
              <option value="307">White Dragon Wyrmling</option>
              <option value="308">Wight</option>
              <option value="309">Will-o'-Wisp</option>
              <option value="310">Winter Wolf</option>
              <option value="311">Wolf</option>
              <option value="312">Worg</option>
              <option value="313">Wraith</option>
              <option value="314">Wyvern</option>
              <option value="315">Xorn</option>
              <option value="316">Yeti</option>
              <option value="317">Young Black Dragon</option>
              <option value="318">Young Blue Dragon</option>
              <option value="319">Young Brass Dragon</option>
              <option value="320">Young Bronze Dragon</option>
              <option value="321">Young Copper Dragon</option>
              <option value="322">Young Gold Dragon</option>
              <option value="323">Young Green Dragon</option>
              <option value="324">Young Red Dragon</option>
              <option value="325">Young Silver Dragon</option>
              <option value="326">Young White Dragon</option>
              <option value="327">Zombie</option>
            </select>
            <button className="button-bby" onClick={addNewMonsterRow}>+</button>
          </div>
        <label>Quantity:</label>
        <input type="number" value="1" size="4" min="1" max="99"></input>
        </div>
        <div id="insert-here"></div>
      </div>
  )
}

export default MonsterBar;