/* Moh's Mining is a mod that rearranges mining progression in order of mineral hardness.
 * It also changes the hardness and blast resistence to match realistic Moh's hardness
 * values and specific weights (density).  Additionally, several more materials are added
 * to the mining progression, and a couple of alloys are made available.
 *
 * This mod includes weapons, tools, and armor, also adjusted to match hardness and density
 * of real materials.
 * 
 * It is recommended to install Vanilla Ingot Works in order to make the alloys.
 */

// Anvils repair tools using the tool and its key ingredient.
Settings.enhancedAnvilRepair(true);
// Crafting benches repair tools using the tool and its key ingredient.
Settings.craftingGridToolRepair(true);
// When tools break, they just won't work until they're fixed.
Global.preventToolBreaking(true);

// These options show the mining level of tools and blocks in the tooltips.
Settings.showToolHarvestLevels(true);
//Settings.showBlockHarvestLevels(true);

// These options show armor values in the tooltip.
Settings.showArmorValues(true);

// We will include RotaryCraft in the progression so its material needs to change, too.
RotaryCraft.patchRotarycraftSteelTools(true);

// Before we begin, it helps to have a creative mode tab.
addCreativeTab("MohsMining.general","Moh's Mining: Ores and Metals","MohsMining:oreCopper");
addCreativeTab("MohsMining.tools","Moh's Mining: Tools and Weapons","MohsMining:toolPipeLead");
addCreativeTab("MohsMining.armor","Moh's Mining: Armor","MohsMining:armorSilverChestplate");

// Creating tool and armor material stats.
loadjs("materials.js");

// Creating items and blocks.
loadjs("objects.js");

// Creating and distributing ores.
loadjs("ores.js");
