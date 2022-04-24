/*
 * Copyright (c) 2020-2022. kokoro-aya. All right reserved.
 * Shizuku - A Playground Front-End implemented with React/Ant Design/UmiJS and Monaco Editor
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

const PLAYGROUND_MESSAGES = [
  'playground.defaultNotification.success.message',
  'playground.defaultNotification.success.desc',
  'playground.defaultNotification.info.message',
  'playground.defaultNotification.info.desc',
  'playground.defaultNotification.warning.message',
  'playground.defaultNotification.warning.desc',
  'playground.defaultNotification.error.message',
  'playground.defaultNotification.error.desc',
  'playground.notification.type.info',
  'playground.notification.type.win',
  'playground.notification.type.lost',
  'playground.notification.type.pending',
  'playground.notification.desc.gem',
  'playground.notification.desc.switch',
  'playground.notification.desc.beeper',
  'playground.notification.desc.attack',
  'playground.notification.desc.win',
  'playground.notification.desc.lost',
  'playground.notification.desc.pending',
  'playground.notification.type.endGame',
  'playground.notification.desc.endGame',
  'playground.input.loop',
  'playground.input.function',
  'playground.input.changeMap',
  'playground.input.globalCode',
  'playground.input.instanceCode',
  'playground.input.instructions',
  'playground.input.inst',
  'playground.input.collected',
  'playground.input.turn',
  'playground.input.newChar',
  'playground.input.player',
  'playground.input.specialist',
  'playground.input.playerNull',
  'playground.input.specialistNull',
  'playground.input.global',
  'playground.input.print',
  'playground.input.structInst',
  'playground.input.run',
  'playground.input.reset',
  'playground.gameCond.collectGems',
  'playground.gameCond.switchesBy',
  'playground.gameCond.monstersKilled',
  'playground.gameCond.monstersKilledLessThan',
  'playground.gameCond.arriveAt',
  'playground.gameCond.endGameAfter',
  'playground.gameCond.noSameTileRepassed',
  'playground.gameCond.noEndGameCondition',
  'playground.gameCond.gameRules',
  'playground.gameCond.click',
  'playground.gameCond.useCollision',
  'playground.gameCond.noCollision',
  'playground.status.currentStatus',
  'playground.status.success',
  'playground.status.processing',
  'playground.status.idle',
  'playground.status.impossible',
  'playground.status.gem',
  'playground.status.switch',
  'playground.status.beeper',
  'playground.status.monster',
  'playground.map.select',
  'playground.map.selection',
] as const;

const DIALOG_MESSAGES = ['dialog.ok', 'dialog.cancel'] as const;

const SECTION_MESSAGES = [
  'section.About',
  'section.Editor',
  'section.Feedback',
  'section.Gallery',
  'section.Help',
  'section.Home',
  'section.Playground',
  'section.Story',
] as const;

const DEFAULT_MESSAGES = [
  'welcome',
  'underConstruct',
  'dark',
  'light',
] as const;

const SQUARE_MESSAGES = [
  'square.isChar',
  'square.player.id',
  'square.player.coo',
  'square.player.beeper',
  'square.player.gem',
  'square.player.stamina',
  'square.player.role',
  'square.direction.up',
  'square.direction.down',
  'square.direction.left',
  'square.direction.right',
  'square.blocked',
  'square.open',
  'square.biome.snowy',
  'square.biome.plains',
  'square.biome.rainy',
  'square.biome.hell',
  'square.biome.info',
  'square.color',
  'square.gem',
  'square.beeper',
  'square.opened',
  'square.closed',
  'square.switch',
  'square.portal',
  'square.portal.dest',
  'square.energy',
  'square.monster',
  'square.lock',
  'square.lock.controlled',
  'square.lock.info',
  'square.platform',
  'square.height',
  'square.stair',
  'square.direction',
  'square.info',
  'square.advanced',
] as const;

const MESSAGES = [
  ...PLAYGROUND_MESSAGES,
  ...DIALOG_MESSAGES,
  ...DEFAULT_MESSAGES,
  ...SECTION_MESSAGES,
  ...SQUARE_MESSAGES,
] as const;

export type MessageType = typeof MESSAGES[number];