package com.example.web_2048.game;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    @GetMapping("/game")
    public String game() {
        return "game"; // "game" 템플릿을 반환
    }
}
