const express = require("express")
const router = express.Router()
const UserController = require("../Controller/User")


/**
 * @swagger
 * /register:
 *  post:
 *    summary: Update the User by the id
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/x-www-form-urlencoded:
 *             schema:
 *                type: object
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne
 *                   password:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */
router.post('/register', UserController.register)

/**
 * @swagger
 * /get:
 *  get:
 *    summary: Update the book by the id
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.get("/get", UserController.exampleGet)

/**
 * @swagger
 * /get/{id}:
 *  get:
 *    summary: Update the book by the id
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

 router.get("/get/:id", UserController.exampleGetOne)


 /**
 * @swagger
 * /update/{id}:
 *  put:
 *    summary: Update the book by the id
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    requestBody:
 *      required: true
 *      content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   username:
 *                     type: string
 *                     description: The user's name.
 *                     example: Leanne Graham
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.put("/update/:id", UserController.exampleUpdate)

 /**
 * @swagger
 * /delete/{id}:
 *  delete:
 *    summary: Update the book by the id
 *    parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *    tags: [USER]
 *    responses:
 *      200:
 *        description: The book was created
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *    security:
 *    - api_key: []
 */

  router.delete("/delete/:id", UserController.exampleDelete)
module.exports = router
