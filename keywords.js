// Rules reference data. This is the only file you edit to change the reference screen.
// Each entry: name, rules[] (label shown + anchor id on the rules page, e.g. 702.11 -> "R70211"),
// summary, doesNot[] (what it does NOT do), misread (the common mistake), verified (date checked against the CR).
// Wording is plain English and paraphrased; rule numbers and meaning were checked against the
// Comprehensive Rules effective 6 Nov 2026 (see "Rules Check.md" in the project folder).
window.KEYWORDS_META = {
  edition: '6 Nov 2026',
  linkBase: 'https://yawgatog.com/resources/magic-rules/#',
  officialUrl: 'https://magic.wizards.com/en/rules'
};

window.KEYWORDS = [
  {
    name: 'Hexproof',
    rules: [{ label: '702.11', id: 'R70211' }],
    summary: "Can't be the target of spells or abilities your opponents control. It can also be on a player.",
    doesNot: [
      "Doesn't stop you from targeting your own hexproof permanent.",
      "Doesn't stop anything that doesn't target: board wipes, \"each opponent\" effects, combat damage."
    ],
    misread: "Hexproof isn't \"untouchable\". Any effect that doesn't use the word \"target\" still works on it. \"Hexproof from [quality]\" is a narrower version.",
    verified: '2026-11-22'
  },
  {
    name: 'Shroud',
    rules: [{ label: '702.18', id: 'R70218' }],
    summary: "Can't be the target of any spell or ability, including your own.",
    doesNot: [
      "Doesn't stop effects that don't target (board wipes, \"each creature\" effects, combat damage)."
    ],
    misread: "Shroud is not hexproof. Hexproof only stops opponents; shroud stops everyone, including you.",
    verified: '2026-11-22'
  },
  {
    name: 'Ward',
    rules: [{ label: '702.21', id: 'R70221' }],
    summary: "When an opponent's spell or ability targets it, that spell or ability is countered unless they pay the ward cost.",
    doesNot: [
      "Doesn't stop the targeting itself. The opponent can still target it and then pay.",
      "Doesn't do anything to your own spells and abilities."
    ],
    misread: "Ward is a trigger, not \"can't be targeted\". If the opponent pays the cost, their spell or ability goes ahead as normal.",
    verified: '2026-11-22'
  },
  {
    name: 'Indestructible',
    rules: [{ label: '702.12', id: 'R70212' }],
    summary: "Can't be destroyed. Lethal damage and \"destroy\" effects don't kill it.",
    doesNot: [
      "Doesn't stop exile or sacrifice.",
      "Doesn't stop a creature dying from toughness 0 or less (like a -X/-X effect).",
      "Doesn't stop being put into the graveyard by effects that don't say \"destroy\" (such as the legend rule)."
    ],
    misread: "Indestructible isn't \"can't die\". Anything that isn't \"destroy\" or lethal damage still gets rid of it.",
    verified: '2026-11-22'
  },
  {
    name: 'Protection',
    rules: [{ label: '702.16', id: 'R70216' }],
    summary: "\"Protection from [quality]\" (often a color). Remember DEBT: Damage from that quality is prevented, it can't be Enchanted or Equipped by it, can't be Blocked by it, and can't be Targeted by it.",
    doesNot: [
      "Doesn't stop effects from that quality that don't target and don't deal damage, like \"destroy all creatures\".",
      "Doesn't affect sources that don't have the quality."
    ],
    misread: "Protection from a color doesn't make a permanent immune to everything of that color. A non-targeted board wipe of that color still kills it.",
    verified: '2026-11-22'
  },
  {
    name: 'Deathtouch',
    rules: [{ label: '702.2', id: 'R7022' }],
    summary: "Any damage a source with deathtouch deals to a creature is lethal. The creature is destroyed the next time state-based actions are checked.",
    doesNot: [
      "Doesn't kill an indestructible creature.",
      "Doesn't do anything extra to players. It only makes damage to creatures lethal."
    ],
    misread: "Damage still has to actually be dealt. If it's prevented, deathtouch does nothing.",
    verified: '2026-11-22'
  },
  {
    name: 'Trample',
    rules: [{ label: '702.19', id: 'R70219' }],
    summary: "An attacking creature with trample assigns lethal damage to the creatures blocking it first. The excess can go to the player, planeswalker or battle it's attacking.",
    doesNot: [
      "Does nothing when the creature is blocking.",
      "Does nothing for noncombat damage."
    ],
    misread: "Trample doesn't make a creature unblockable. It can be blocked as usual; the extra damage just carries through.",
    verified: '2026-11-22'
  },
  {
    name: 'Flying',
    rules: [{ label: '702.9', id: 'R7029' }],
    summary: "An evasion ability. A creature with flying can't be blocked except by creatures with flying and/or reach.",
    doesNot: [
      "Doesn't make a creature unblockable. Creatures with flying or reach can block it.",
      "Doesn't stop a flier from blocking ground creatures."
    ],
    misread: "Flying only limits who can block it. A flier can block creatures with or without flying.",
    verified: '2026-11-22'
  },
  {
    name: 'Reach',
    rules: [{ label: '702.17', id: 'R70217' }, { label: '702.9b', id: 'R7029b' }],
    summary: "Lets a creature block creatures with flying, as well as everything else it normally can.",
    doesNot: [
      "Doesn't give the creature flying, so it doesn't gain evasion when it attacks.",
      "Doesn't change anything about attacking. It only matters for blocking."
    ],
    misread: "Reach isn't a weaker flying. It just means \"can block fliers\".",
    verified: '2026-11-22'
  },
  {
    name: 'Haste',
    rules: [{ label: '702.10', id: 'R70210' }, { label: '302.6', id: 'R3026' }],
    summary: "The creature can attack, and use abilities with the tap or untap symbol in their cost, the turn it comes under your control. Without haste it has to have been under your control since your turn began (\"summoning sickness\").",
    doesNot: [
      "Doesn't let it attack more than once a turn.",
      "Doesn't matter once the creature has been under your control since the start of your turn."
    ],
    misread: "Haste isn't only for attacking. It also lets the creature use {T} abilities right away.",
    verified: '2026-11-22'
  },
  {
    name: 'Vigilance',
    rules: [{ label: '702.20', id: 'R70220' }],
    summary: "Attacking doesn't cause the creature to tap.",
    doesNot: [
      "Doesn't stop other things from tapping it (costs, opponents' effects).",
      "Doesn't let a tapped creature attack. It still has to be untapped to be declared as an attacker."
    ],
    misread: "Vigilance just means attacking doesn't tap it. That's why it can attack and still be untapped to block on your opponents' turns.",
    verified: '2026-11-22'
  },
  {
    name: 'Menace',
    rules: [{ label: '702.111', id: 'R702111' }],
    summary: "An evasion ability. A creature with menace can't be blocked except by two or more creatures.",
    doesNot: [
      "Doesn't make it unblockable. Two or more blockers is fine.",
      "Doesn't mean exactly two blockers. Two or more all count."
    ],
    misread: "One big blocker can't stop a creature with menace by itself, but a pair of small ones can.",
    verified: '2026-11-22'
  },
  {
    name: 'Flash',
    rules: [{ label: '702.8', id: 'R7028' }, { label: '302.6', id: 'R3026' }],
    summary: "You may play this card any time you could cast an instant.",
    doesNot: [
      "Doesn't make the card an instant. A creature with flash is still a creature once it resolves.",
      "Doesn't give a creature haste. If it enters on your own turn, it still can't attack that turn."
    ],
    misread: "Flash is about timing, not speed. A flash creature cast at the end of an opponent's turn can attack on your turn only because you've controlled it since your turn began.",
    verified: '2026-11-22'
  },
  {
    name: 'Defender',
    rules: [{ label: '702.3', id: 'R7023' }],
    summary: "A creature with defender can't attack.",
    doesNot: [
      "Doesn't stop it from blocking.",
      "Doesn't stop it from using its other abilities, including tap abilities (once it's not summoning sick)."
    ],
    misread: "Defender only stops attacking. It can block normally, and it can still use abilities that tap it.",
    verified: '2026-11-22'
  },
  {
    name: 'First strike',
    rules: [{ label: '702.7', id: 'R7027' }],
    summary: "Creatures with first strike (or double strike) deal combat damage in an extra, earlier step. Creatures without them deal their combat damage afterward, in the regular step.",
    doesNot: [
      "Doesn't win a fight by itself. A blocker that survives the first-strike damage still hits back in the regular step.",
      "Doesn't deal damage twice. That's double strike."
    ],
    misread: "First strike only helps if the first-strike damage kills the other creature before it can deal its own damage.",
    verified: '2026-11-22'
  },
  {
    name: 'Double strike',
    rules: [{ label: '702.4', id: 'R7024' }],
    summary: "Deals combat damage in the first-strike step and again in the regular step.",
    doesNot: [
      "Doesn't double noncombat damage.",
      "Isn't one hit for twice the damage. It's two separate hits."
    ],
    misread: "A double strike commander deals combat damage twice, so it can add to commander damage twice in the same combat.",
    verified: '2026-11-22'
  },
  {
    name: 'Lifelink',
    rules: [{ label: '702.15', id: 'R70215' }],
    summary: "Damage dealt by a source with lifelink also makes its controller gain that much life. It happens at the same time as the damage.",
    doesNot: [
      "Isn't a trigger, so nothing can be done in between the damage and the life gain.",
      "Gains no life if the damage is prevented."
    ],
    misread: "Lifelink isn't only for combat. Any damage the source deals, combat or not, gains life.",
    verified: '2026-11-22'
  },
  {
    name: 'Commander damage',
    rules: [{ label: '903.10a', id: 'R90310a' }, { label: '120.3a', id: 'R1203a' }],
    summary: "A player dealt 21 or more combat damage by the same commander over the course of the game loses. That damage also costs life, like any damage.",
    doesNot: [
      "Noncombat damage from a commander doesn't count toward 21 (it still costs life).",
      "Damage from different commanders doesn't add together. This matters with partner commanders."
    ],
    misread: "Commander damage isn't a separate pool instead of life. It's normal life loss plus a running total per commander.",
    verified: '2026-11-22'
  },
  {
    name: 'Poison counters',
    rules: [{ label: '122.1f', id: 'R1221f' }, { label: '704.5c', id: 'R7045c' }, { label: '120.3b', id: 'R1203b' }],
    summary: "A player with ten or more poison counters loses the game. Poison counters are tracked separately from life.",
    doesNot: [
      "Don't reduce life. Life and poison are two separate ways to lose.",
      "Aren't affected by lifegain."
    ],
    misread: "Damage from a source with infect gives the player poison counters instead of making them lose life.",
    verified: '2026-11-22'
  },
  {
    name: 'Commander tax',
    rules: [{ label: '903.8', id: 'R9038' }],
    summary: "Casting your commander from the command zone costs {2} more for each previous time you cast it from there this game.",
    doesNot: [
      "Doesn't go up when your commander dies or moves to the command zone without being cast.",
      "Doesn't apply to casting it from anywhere other than the command zone."
    ],
    misread: "The tax counts casts, not deaths.",
    verified: '2026-11-22'
  },
  {
    name: 'Color identity',
    rules: [{ label: '903.4', id: 'R9034' }],
    summary: "Used to build Commander decks. It's the colors of the mana symbols in a card's cost and rules text, plus any colors from characteristic-defining abilities or a color indicator.",
    doesNot: [
      "Isn't the same as the card's own color."
    ],
    misread: "A card with a colored mana symbol in its rules text has that color in its identity, even if the card itself looks colorless.",
    verified: '2026-11-22'
  },
  {
    name: 'Command zone return',
    rules: [{ label: '903.9', id: 'R9039' }, { label: '903.9a', id: 'R9039a' }, { label: '903.9b', id: 'R9039b' }],
    summary: "A commander may go to the command zone. From the graveyard or exile, its owner can move it the next time state-based actions are checked. If it would go to hand or library, the owner can put it in the command zone instead.",
    doesNot: [
      "Doesn't happen automatically. It's always the owner's choice (\"may\")."
    ],
    misread: "Graveyard and exile work as a state-based action; hand and library work as a replacement effect. Either way the owner decides.",
    verified: '2026-11-22'
  },
  {
    name: 'Landfall (ability words)',
    rules: [{ label: '207.2c', id: 'R2072c' }],
    summary: "Landfall is an \"ability word\": an italic label at the start of some abilities that groups cards with similar effects. On cards it usually goes with something happening when a land comes in under your control, but the exact trigger is whatever that card's text says.",
    doesNot: [
      "Has no rules meaning of its own and no entry in the Comprehensive Rules.",
      "Doesn't do anything by itself. The text after the label is what counts."
    ],
    misread: "Landfall isn't a keyword like flying. You can't look up what it does. Read the card's own text. Other ability words work the same way (constellation, raid, morbid and more).",
    verified: '2026-11-22'
  }
];
