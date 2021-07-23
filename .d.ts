/**
 *  Workaround for importing modules without explicit typing.
 *
 *  This is due to the TS7016 error which gives warnings for implicity any type
 *  when importing a module without explicit typing.
 *
 *  TODO: Modules seem to still require explicit, per-module, declaration in
 *  this file (so 'declare module "*"' doesn't work).
 *
 * @author  Zimon Kuhs
 * @date    2021-07-23
 * @see     https://stackoverflow.com/questions/41359407
 */

declare module "import-modules"
