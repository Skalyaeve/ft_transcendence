/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Circular ease-in.
 *
 * @function Phaser.Math.Easing.Circular.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
const In = v => {
  return 1 - Math.sqrt(1 - v * v)
}

export default In
