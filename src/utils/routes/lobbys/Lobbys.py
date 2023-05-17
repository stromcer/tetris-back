class LobbyManager:
    def __init__(self):
        self.active_lobbys = []

    def get_lobbys(self):
        return self.active_lobbys

    def create_lobby(self, lobby_id):
        new_lobby = {
            "title" : lobby_id,
            "id" : lobby_id,
            "player_list" : [],
            "players" : 0
        }

        for lobby in self.active_lobbys:
            if lobby["id"] == new_lobby["id"]:
                raise KeyError("exists")

        self.active_lobbys.append(new_lobby)
        return self.active_lobbys

    def join_lobby(self, lobby_id, username):
        for lobby in self.active_lobbys:
            if lobby["id"] == lobby_id:
                if lobby["players"] == 4:
                    raise KeyError("full")

                lobby["player_list"].append(username)
                lobby["players"] = len(lobby["player_list"])
                return lobby

        return False

    def leave_lobby(self, lobby_id, username):
        for lobby in self.active_lobbys:
            if lobby["id"] != lobby_id:
                continue

            lobby["player_list"] = [player for player in lobby["player_list"] if player != username]
            lobby["players"] = len(lobby["player_list"])

            if lobby["players"] < 1:
                self.active_lobbys = [lobby for lobby in self.active_lobbys if lobby["id"] != lobby_id]

            return lobby

    def get_lobby_by_id(self, lobby_id):
        for lobby in self.active_lobbys:
            if lobby["id"] == lobby_id:
                return lobby

        return False
