let attributes = ["attribute-body","attribute-agility", "attribute-reaction", 
    "attribute-strength", "attribute-willpower", "attribute-logic", 
    "attribute-intuition", "attribute-charisma", "attribute-edge",
    "attribute-essence", "attribute-magic", "attribute-resonance"];
let calcscores = ["attribute-initiativescore", "attribute-matrixinitiativescore",
    "attribute-astralinitiative", "attribute-composure", "attribute-judgeintentions",
    "attribute-memory", "attribute-liftcarry", "attribute-movement"];
let limits = ["limit-physical", "limit-mental", "limit-social"];
let skills = ["skill-archery", "skill-automatics", "skill-blades", 
    "skill-clubs", "skill-heavyweapons", "skill-longarms", "skill-pistols",
    "skill-throwingweapons", "skill-unarmedcombat", "skill-disguise", 
    "skill-diving", "skill-escapeartist", "skill-freefall",
    "skill-gymnastics", "skill-palming", "skill-perception",
    "skill-running", "skill-sneaking", "skill-survival",
    "skill-swimming", "skill-tracking"];
let stats = ["stat-armorrating"]

on("ready", function(){
    on("add:character", function(char){
        log("CharacterCreation / Creating character: " + char.get("name"));
        _.each(attributes, function(att){
            createObj("attribute", {
                name: att,
                current: 3,
                characterid: char.id
            });
        });
        _.each(calcscores, function(cs){
            createObj("attribute", {
                name: cs,
                current: 10,
                characterid: char.id
            });
        });
        createObj("attribute", {
                name: "initiative-physical",
                current: "1d6",
                characterid: char.id
        });
        createObj("attribute", {
                name: "initiative-astral",
                current: "2d6",
                characterid: char.id
        });
        createObj("attribute", {
                name: "initiative-matrixar",
                current: "1d6",
                characterid: char.id
        });
        createObj("attribute", {
                name: "initiative-matrixcold",
                current: "3d6",
                characterid: char.id
        });
        createObj("attribute", {
                name: "initiative-matrixhot",
                current: "4d6",
                characterid: char.id
        });
        createObj("attribute", {
                name: "initiative-rigging",
                current: "1d6",
                characterid: char.id
        });
        _.each(limits, function(lim){
            createObj("attribute", {
                name: lim,
                current: 5,
                characterid: char.id
            });
        });
        _.each(skills, function(sk){
            createObj("attribute", {
                name: sk,
                current: 0,
                characterid: char.id
            });
        });
        _.each(stats, function(st){
            createObj("attribute", {
                name: st,
                current: 0,
                characterid: char.id
            });
        });
        createObj("attribute", {
                name: "npc",
                current: "yes",
                characterid: char.id
        });
        createObj("ability", {
            name: "Initiative",
            action: "#Initiative-Enemy",
            istokenaction: true,
            characterid: char.id,
        });
    });
});
