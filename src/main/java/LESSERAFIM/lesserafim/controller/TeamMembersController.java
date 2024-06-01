package LESSERAFIM.lesserafim.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TeamMembersController {

    @GetMapping(value = "/team/sakura")
    public String sakura() {
        return "team/sakura";
    }

    @GetMapping(value = "/team/chaewon")
    public String chaewon() {
        return "team/chaewon";
    }

    @GetMapping(value = "/team/yunjin")
    public String yunjin() {
        return "team/yunjin";
    }

    @GetMapping(value = "/team/kazuha")
    public String kazuha() {
        return "team/kazuha";
    }

    @GetMapping(value = "/team/eunchae")
    public String eunchae() {
        return "team/eunchae";
    }

}
