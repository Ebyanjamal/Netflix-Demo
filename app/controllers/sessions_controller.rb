class SessionsController < ApplicationController

    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
        else
            render json: {error: 'Invaild Username and/or Password'}, status: :unauthorized 
          end
        end
    end
end
