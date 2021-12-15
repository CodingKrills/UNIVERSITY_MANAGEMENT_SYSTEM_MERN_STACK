import express from "express";
const router = express.Router();

// * =======================================================================================//

import {
    getAllTeachers,
    getTeacher,
    deleteTeacher,
    createTeacher,
    updateTeacher,
    authTeacher
} from "../../controllers/teacher/teacherController.js";

// *=======================================================================================//

router.route("/teacher").post(createTeacher);

// * =======================================================================================//

router.route("/teachers").get(getAllTeachers);

// *=======================================================================================//

router.route("/teacher/:id").get(getTeacher);

// *=======================================================================================//

router.route("/teacher").put(updateTeacher);

// *=======================================================================================//

router.route("/teacher/:id").delete(deleteTeacher);

// *=======================================================================================//

router.route("/teacher/login").post(authTeacher);

// *=======================================================================================//

export default router;