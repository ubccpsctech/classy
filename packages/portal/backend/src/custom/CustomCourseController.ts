import Log from "../../../../common/Log";
import {CourseController} from "../controllers/CourseController";
import {IGitHubController} from "../controllers/GitHubController";
import {Deliverable, Person} from "../Types";

/**
 *
 * 310-specific course controller.
 *
 */
export class CustomCourseController extends CourseController {

    // Does not do anything right now, just here so we know where to make course-specific changes to CourseController

    public constructor(ghController: IGitHubController) {
        super(ghController);
        Log.info("CustomCourseController::<init>");
    }

    public async computeNames(deliv: Deliverable, people: Person[]): Promise<string> {
        Log.info("CustomCourseController::computeNames() - passing up to CourseController");
        return super.computeNames(deliv, people);
    }

}