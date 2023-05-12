

active_lobbys = []


def get_lobbys():
    return active_lobbys

def create_lobby(lobby_id):
    new_lobby = {
        "title" : lobby_id,
        "players" : 0 ,
        "id" : lobby_id,
        "player_list" : []
    }
    
    for lobby in active_lobbys:
        if lobby["id"] == new_lobby["id"]:
            raise KeyError("exists")
        
    
    active_lobbys.append(new_lobby)
    return active_lobbys
    

def join_lobby(lobby_id, username):
    for lobby in active_lobbys:
        print(lobby["id"])
        if lobby["id"] == lobby_id:
            if lobby["players"] == 4:
                raise KeyError("full")
            
            lobby["players"] += 1
            lobby["player_list"].append(username)
            return lobby
    
    return False
    
    
def leave_lobby(lobby_id, username):
    
    for lobby in active_lobbys:
        
        if lobby["id"] != lobby_id:
            continue
        
        lobby["players"] -= 1
        lobby["player_list"] = [ player for player in lobby["player_list"] if player != username]
        
        if lobby["players"] < 1:
            return [ lobby for lobby in active_lobbys if lobby["id"] != lobby_id]
                
            
        return lobby
